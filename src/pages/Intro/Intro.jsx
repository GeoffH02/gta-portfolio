import { useEffect, useRef, useState } from "react";
import * as Cesium from "cesium";

import imgEuratech from "../../styles/img/Euratechnologies-Mathieu-Lassalle-7-1-min-1920x960-crop-1705509667.jpg";
import imgCitadelle from "../../styles/img/Jielbeaumadier_citadelle_lille_2006.jpg";
import imgLille from "../../styles/img/Lille_destination.jpg";
import imgShutterstock from "../../styles/img/shutterstock-2376311517-1-_1_2000.jpeg";

const LILLE = { lon: 3.063535, lat: 50.636836 };

const LOADER_IMAGES = [imgEuratech, imgCitadelle, imgLille, imgShutterstock];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shuffle(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function flyTo(viewer, options) {
  return new Promise((resolve) => {
    viewer.camera.flyTo({
      ...options,
      complete: resolve,
      cancel: resolve,
    });
  });
}

function waitForTilesToSettle(viewer, timeoutMs = 1000) {
  return new Promise((resolve) => {
    if (viewer.scene.globe.tilesLoaded) {
      resolve();
      return;
    }

    let settled = false;

    function cleanup() {
      clearTimeout(timeoutId);
      viewer.scene.globe.tileLoadProgressEvent.removeEventListener(check);
    }

    function check() {
      if (!settled && viewer.scene.globe.tilesLoaded) {
        settled = true;
        cleanup();
        resolve();
      }
    }

    const timeoutId = setTimeout(() => {
      if (!settled) {
        settled = true;
        cleanup();
        resolve();
      }
    }, timeoutMs);

    viewer.scene.globe.tileLoadProgressEvent.addEventListener(check);
  });
}

export default function Intro({ onComplete }) {
  const containerRef = useRef(null);
  const speedLinesRef = useRef(null);
  const viewerRef = useRef(null);

  const [loaderImages] = useState(() => shuffle(LOADER_IMAGES));
  const [currentImage, setCurrentImage] = useState(0);

  const [step, setStep] = useState(-1);
  const [isPreloading, setIsPreloading] = useState(true);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isPreloading) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % loaderImages.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPreloading, loaderImages.length]);

  useEffect(() => {
    if (!containerRef.current || viewerRef.current) return;

    Cesium.RequestScheduler.maximumRequestsPerServer = 18;

    const viewer = new Cesium.Viewer(containerRef.current, {
      animation: false,
      timeline: false,
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      fullscreenButton: false,
      infoBox: false,
      selectionIndicator: false,
      shouldAnimate: true,
      terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    viewerRef.current = viewer;

    viewer.scene.globe.enableLighting = true;
    viewer.scene.fog.enabled = true;
    viewer.scene.skyAtmosphere.show = true;
    viewer.scene.screenSpaceCameraController.enableCollisionDetection = false;
    viewer.cesiumWidget.creditContainer.style.display = "none";
    viewer.scene.globe.preloadAncestors = true;
    viewer.scene.globe.preloadSiblings = true;
    viewer.scene.globe.maximumScreenSpaceError = 1.2;

    const startView = {
      destination: Cesium.Cartesian3.fromDegrees(3.0573, 50.6292, 9000000),
      orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-90),
        roll: 0,
      },
    };

    viewer.camera.setView(startView);

    const flightSteps = [
      {
        destination: Cesium.Cartesian3.fromDegrees(2.2, 47.2, 3200000),
        orientation: {
          heading: Cesium.Math.toRadians(8),
          pitch: Cesium.Math.toRadians(-88),
          roll: 0,
        },
        duration: 0.55,
        easingFunction: Cesium.EasingFunction.EXPONENTIAL_OUT,
        pauseAfter: 350,
      },
      {
        destination: Cesium.Cartesian3.fromDegrees(2.95, 50.25, 420000),
        orientation: {
          heading: Cesium.Math.toRadians(-10),
          pitch: Cesium.Math.toRadians(-87),
          roll: 0,
        },
        duration: 0.55,
        easingFunction: Cesium.EasingFunction.EXPONENTIAL_OUT,
        pauseAfter: 280,
      },
      {
        destination: Cesium.Cartesian3.fromDegrees(LILLE.lon, LILLE.lat, 42000),
        orientation: {
          heading: Cesium.Math.toRadians(18),
          pitch: Cesium.Math.toRadians(-86),
          roll: 0,
        },
        duration: 0.75,
        easingFunction: Cesium.EasingFunction.EXPONENTIAL_OUT,
        pauseAfter: 260,
      },
      {
        destination: Cesium.Cartesian3.fromDegrees(LILLE.lon, LILLE.lat, 4500),
        orientation: {
          heading: Cesium.Math.toRadians(-20),
          pitch: Cesium.Math.toRadians(-84),
          roll: 0,
        },
        duration: 0.55,
        easingFunction: Cesium.EasingFunction.EXPONENTIAL_OUT,
        pauseAfter: 150,
      },
    ];

    let cancelled = false;
    let buildingsTileset = null;

    async function setupVisuals() {
      viewer.imageryLayers.removeAll();

      const imageryProvider = await Cesium.createWorldImageryAsync({
        style: Cesium.IonWorldImageryStyle.AERIAL,
      });

      if (cancelled) return;

      viewer.imageryLayers.addImageryProvider(imageryProvider);

      const tileset = await Cesium.createOsmBuildingsAsync();

      if (cancelled) return;

      tileset.preloadFlightDestinations = true;
      tileset.maximumScreenSpaceError = 4;

      viewer.scene.primitives.add(tileset);
      buildingsTileset = tileset;
    }

    async function preloadWaypoints() {
      for (const stepConfig of flightSteps) {
        if (cancelled) return;

        viewer.camera.setView({
          destination: stepConfig.destination,
          orientation: stepConfig.orientation,
        });

        await waitForTilesToSettle(viewer, 3500);
      }

      if (cancelled) return;

      viewer.camera.setView(startView);
      await waitForTilesToSettle(viewer, 3500);
    }

    const baseFov = viewer.camera.frustum.fov;
    const smoothing = 0.12;

    const effectState = {
      lastPosition: undefined,
      lastTime: undefined,
      smoothedSpeed: 0,
    };

    function updateGtaEffects() {
      const camera = viewer.camera;
      const now = performance.now();
      const position = Cesium.Cartesian3.clone(camera.positionWC);

      if (effectState.lastTime !== undefined) {
        const dt = Cesium.Math.clamp(
          (now - effectState.lastTime) / 1000,
          1 / 120,
          0.1,
        );

        const distance = Cesium.Cartesian3.distance(
          position,
          effectState.lastPosition,
        );

        const altitude = Math.max(camera.positionCartographic.height, 50);
        const rawSpeed = Cesium.Math.clamp(distance / dt / altitude, 0, 1.5);

        effectState.smoothedSpeed +=
          (rawSpeed - effectState.smoothedSpeed) * smoothing;

        const perceivedSpeed = effectState.smoothedSpeed;
        const speedRatio = Math.min(perceivedSpeed, 1);

        camera.frustum.fov = baseFov + Cesium.Math.toRadians(10) * speedRatio;

        if (speedLinesRef.current) {
          speedLinesRef.current.style.opacity = Math.min(
            perceivedSpeed * 0.75,
            0.45,
          ).toFixed(2);
        }

        viewer.scene.globe.maximumScreenSpaceError = 1.2;

        if (buildingsTileset) {
          buildingsTileset.maximumScreenSpaceError = 4;
        }
      }

      effectState.lastPosition = position;
      effectState.lastTime = now;
    }

    viewer.scene.postUpdate.addEventListener(updateGtaEffects);

    async function runIntro() {
      for (let i = 0; i < flightSteps.length; i++) {
        if (cancelled) return;

        setStep(i);
        await flyTo(viewer, flightSteps[i]);
        await wait(flightSteps[i].pauseAfter ?? 200);
      }

      if (cancelled) return;

      await waitForTilesToSettle(viewer, 2500);

      if (cancelled) return;

      setFadeOut(true);
      await wait(900);

      if (!cancelled) onComplete();
    }

    async function boot() {
      await setupVisuals();

      if (cancelled) return;

      await preloadWaypoints();

      if (cancelled) return;

      setIsLoaderExiting(true);
      await wait(750);

      if (cancelled) return;

      setIsPreloading(false);
      await wait(450);

      if (cancelled) return;

      await runIntro();
    }

    boot();

    return () => {
      cancelled = true;
      viewer.scene.postUpdate.removeEventListener(updateGtaEffects);
      viewer.destroy();
      viewerRef.current = null;
    };
  }, [onComplete]);

  async function skipIntro() {
    if (isSkipping) return;

    setIsSkipping(true);
    setFadeOut(true);

    await wait(500);
    onComplete();
  }

  const labels = ["FRANCE", "HAUTS-DE-FRANCE", "LILLE", "PORTFOLIO"];
  const hudLabel = labels[step] ?? "";

  return (
    <section className={`intro ${fadeOut ? "intro--fade" : ""}`}>
      <div
        ref={containerRef}
        className={`cesium-container ${isPreloading ? "is-preloading" : ""}`}
      />

      {!isPreloading && <div ref={speedLinesRef} className="speed-lines" />}
      {!isPreloading && <div className="scanlines" />}
      {!isPreloading && <div className="vignette" />}

      {isPreloading ? (
        <div
          className={`gta-loader ${isLoaderExiting ? "gta-loader--exit" : ""}`}
        >
          {loaderImages.map((image, index) => (
            <div
              key={image}
              className={`gta-loader-image ${
                index === currentImage ? "gta-loader-image--active" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}

          <div className="gta-loader-overlay" />

          <div className="gta-loader-card">
            <span className="gta-loader-kicker">LILLE</span>
            <h1>HALLIER GEOFFREY</h1>
            <p>Chargement du portfolio...</p>

            <div className="gta-loading-bar">
              <span />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="map-title map-title--enter">
            <span>ZOOM SUR</span>
            <h1>{hudLabel}</h1>
            <p>GEOFFREY HALLIER</p>
          </div>

          <div className="map-coords map-coords--enter">
            <span>50.6292° N</span>
            <span>3.0573° E</span>
          </div>
        </>
      )}

      <button className="skip-btn" onClick={skipIntro}>
        Passer l'intro
      </button>
    </section>
  );
}
