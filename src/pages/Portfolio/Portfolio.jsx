import { useEffect, useMemo, useState } from "react";

import PauseTabs from "./components/PauseTabs.jsx";
import PauseSidebar from "./components/PauseSidebar.jsx";

import Home from "../Home/Home.jsx";
import ProjectsOverview from "../Projects/Projects.jsx";
import StackOverview from "../Stack/Stack.jsx";
import Contact from "../Contact/Contact.jsx";
import AboutMe from "../Home/AboutMe.jsx";
import HomeMap from "../Home/HomeMap.jsx";

import imgEuratech from "../../styles/img/Euratechnologies-Mathieu-Lassalle-7-1-min-1920x960-crop-1705509667.jpg";
import imgCitadelle from "../../styles/img/Jielbeaumadier_citadelle_lille_2006.jpg";
import imgLille from "../../styles/img/Lille_destination.jpg";
import imgShutterstock from "../../styles/img/shutterstock-2376311517-1-_1_2000.jpeg";
import profileImage from "../../styles/img/profile.jpg";
import Presentation from "../Home/Presentation.jsx";
import FrontendStack from "../Portfolio/components/FrontEndStack/FrontEndStack.jsx";
import BackEndStack from "../Portfolio/components/BackEndStack/BackEndStack.jsx";
import ToolsStack from "../Portfolio/components/ToolsStack/ToolsStack.jsx";

const PORTFOLIO_IMAGES = [imgEuratech, imgCitadelle, imgLille, imgShutterstock];

function PortfolioOverview() {
  return (
    <>
      <div className="pause-row active">
        <span>Profil</span>
        <strong>Développeur Full Stack</strong>
      </div>

      <div className="pause-row">
        <span>Spécialité</span>
        <strong>Interfaces propres, rapides et efficaces</strong>
      </div>

      <div className="pause-row">
        <span>Stack principale</span>
        <strong>React / Node.js / GraphQL</strong>
      </div>

      <div className="pause-row">
        <span>Projet principal</span>
        <strong>TF2 Trading Helper</strong>
      </div>

      <div className="pause-row">
        <span>Expérience</span>
        <strong>Kobi Sport / Epitech</strong>
      </div>
    </>
  );
}

function CinematicProject() {
  return (
    <>
      <div className="pause-row active">
        <span>Projet</span>
        <strong>Portfolio Cinematic</strong>
      </div>

      <div className="pause-row">
        <span>Intro</span>
        <strong>Animation caméra Cesium vers Lille</strong>
      </div>

      <div className="pause-row">
        <span>UI</span>
        <strong>Menu pause inspiré GTA</strong>
      </div>

      <div className="pause-row">
        <span>Objectif</span>
        <strong>Portfolio immersif et mémorable</strong>
      </div>
    </>
  );
}

const MENU = {
  home: {
    label: "PRESENTATION",
    items: [
      { key: "overview", label: "Informations", component: Home },
      { key: "presentation", label: "Presentation", component: Presentation },
      { key: "about", label: "Hobbies", component: AboutMe },
      { key: "home", label: "Carte", component: HomeMap },
    ],
  },
  stack: {
    label: "STACK",
    items: [
      { key: "overview", label: "Vue d'ensemble", component: StackOverview },
      { key: "frontend", label: "Frontend", component: FrontendStack },
      { key: "backend", label: "Backend", component: BackEndStack },
      { key: "tools", label: "Outils", component: ToolsStack },
    ],
  },
  portfolio: {
    label: "PORTFOLIO",
    items: [
      {
        key: "overview",
        label: "Vue d'ensemble",
        component: PortfolioOverview,
      },
      { key: "intro", label: "Intro GTA", component: CinematicProject },
      { key: "about", label: "Profil", component: AboutMe },
    ],
  },
  projects: {
    label: "PROJECTS",
    items: [
      { key: "overview", label: "Vue d'ensemble", component: ProjectsOverview },
      {
        key: "cinematic",
        label: "Portfolio Cinematic",
        component: CinematicProject,
      },
    ],
  },

  contact: {
    label: "CONTACT",
    items: [{ key: "overview", label: "Contact", component: Contact }],
  },
};

const CATEGORY_KEYS = Object.keys(MENU);

export default function Portfolio({ visible }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("home");
  const [activeItem, setActiveItem] = useState(MENU.portfolio.items[0].key);

  const currentCategory = MENU[activeCategory];

  const currentItem = useMemo(() => {
    return (
      currentCategory.items.find((item) => item.key === activeItem) ??
      currentCategory.items[0]
    );
  }, [activeItem, currentCategory]);

  const ActiveContent = currentItem.component;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % PORTFOLIO_IMAGES.length;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  function changeCategory(categoryKey) {
    setActiveCategory(categoryKey);
    setActiveItem(MENU[categoryKey].items[0].key);
  }

  function goPrevious() {
    const currentIndex = CATEGORY_KEYS.indexOf(activeCategory);
    const previousIndex =
      (currentIndex - 1 + CATEGORY_KEYS.length) % CATEGORY_KEYS.length;

    changeCategory(CATEGORY_KEYS[previousIndex]);
  }

  function goNext() {
    const currentIndex = CATEGORY_KEYS.indexOf(activeCategory);
    const nextIndex = (currentIndex + 1) % CATEGORY_KEYS.length;

    changeCategory(CATEGORY_KEYS[nextIndex]);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      const tag = event.target.tagName;

      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        event.target.isContentEditable
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case "q":
          event.preventDefault();
          goPrevious();
          break;

        case "d":
          event.preventDefault();
          goNext();
          break;

        case "z":
          event.preventDefault();
          moveSidebar(-1);
          break;

        case "s":
          event.preventDefault();
          moveSidebar(1);
          break;

        default:
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCategory, activeItem]);

  function moveSidebar(direction) {
    const currentItems = MENU[activeCategory].items;

    const currentIndex = currentItems.findIndex(
      (item) => item.key === activeItem,
    );

    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = currentItems.length - 1;
    }

    if (newIndex >= currentItems.length) {
      newIndex = 0;
    }

    setActiveItem(currentItems[newIndex].key);
  }

  return (
    <section
      className={`portfolio gta-pause ${visible ? "portfolio--visible" : ""}`}
    >
      <div className="pause-slideshow">
        {PORTFOLIO_IMAGES.map((image, index) => (
          <div
            key={image}
            className={`pause-slide ${
              index === currentImage ? "pause-slide--active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="pause-bg" />

      <header className="pause-header">
        <h1>Hallier Geoffrey</h1>

        <div className="pause-profile">
          <div className="pause-profile-text">
            <strong>GEOFFREY</strong>
            <span>FULL STACK DEVELOPER</span>
            <small>LILLE, FRANCE</small>
          </div>

          <img src={profileImage} alt="Geoffrey Hallier" />
        </div>
      </header>

      <PauseTabs
        menu={MENU}
        categories={CATEGORY_KEYS}
        activeCategory={activeCategory}
        changeCategory={changeCategory}
        goPrevious={goPrevious}
        goNext={goNext}
      />

      <div className="pause-content">
        <PauseSidebar
          items={currentCategory.items}
          activeItem={currentItem.key}
          setActiveItem={setActiveItem}
        />

        <main className="pause-panel">
          <ActiveContent />
        </main>
      </div>

      <footer className="pause-footer">
        <span>
          <b>Z / S</b> Naviguer
        </span>
        <span>
          <b>Q / D</b> Changer d'onglet
        </span>
      </footer>
    </section>
  );
}
