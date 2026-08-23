import { useEffect, useMemo, useState } from "react";

import PauseTabs from "./components/PauseTabs.jsx";
import PauseSidebar from "./components/PauseSidebar.jsx";

import Home from "../Home/Home.jsx";
import Presentation from "../Home/Presentation.jsx";
import AboutMe from "../Home/AboutMe.jsx";
import HomeMap from "../Home/HomeMap.jsx";

import ProjectsOverview from "../Projects/Projects.jsx";
import StackOverview from "../Stack/Stack.jsx";
import Contact from "../Contact/Contact.jsx";
import ContactQrCodes from "../Contact/components/ContactQRCode/ContactQRCode.jsx";
import ContactCV from "../Contact/components/ContactCV/ContactCV.jsx";
import Tf2Project from "../Projects/pages/TF2Project.jsx";

import FrontendStack from "./components/FrontEndStack/FrontEndStack.jsx";
import BackEndStack from "./components/BackEndStack/BackEndStack.jsx";
import ToolsStack from "./components/ToolsStack/ToolsStack.jsx";
import CareerOverview from "../Career/CareerOverview.jsx";
import CareerKobi from "../Career/CareerKobi.jsx";
import CareerQuicksell from "../Career/CareerQuicksell.jsx";
import CareerVirgo from "../Career/CareerVirgo.jsx";
import CareerNespoli from "../Career/CareerNespoli.jsx";

import imgEuratech from "../../styles/img/Euratechnologies-Mathieu-Lassalle-7-1-min-1920x960-crop-1705509667.jpg";
import imgCitadelle from "../../styles/img/Jielbeaumadier_citadelle_lille_2006.jpg";
import imgLille from "../../styles/img/Lille_destination.jpg";
import imgShutterstock from "../../styles/img/shutterstock-2376311517-1-_1_2000.jpeg";
import profileImage from "../../styles/img/profile.jpg";
import NespoliProject from "../Projects/pages/NespoliProject.jsx";
import VirgoProject from "../Projects/pages/VirgoProject.jsx";

const PORTFOLIO_IMAGES = [imgEuratech, imgCitadelle, imgLille, imgShutterstock];

const MENU = {
  home: {
    label: "PRESENTATION",
    items: [
      {
        key: "overview",
        label: "Informations",
        component: Home,
      },
      {
        key: "evolution",
        label: "Evolution",
        component: Presentation,
      },
      {
        key: "about",
        label: "Hobbies",
        component: AboutMe,
      },
      {
        key: "map",
        label: "Carte",
        component: HomeMap,
      },
    ],
  },

  stack: {
    label: "STACK",
    items: [
      {
        key: "overview",
        label: "Vue d'ensemble",
        component: StackOverview,
      },
      {
        key: "frontend",
        label: "Frontend",
        component: FrontendStack,
      },
      {
        key: "backend",
        label: "Backend",
        component: BackEndStack,
      },
      {
        key: "tools",
        label: "Outils",
        component: ToolsStack,
      },
    ],
  },

  portfolio: {
    label: "CARRIÈRE",
    items: [
      {
        key: "overview",
        label: "Vue d'ensemble",
        component: CareerOverview,
      },
      {
        key: "kobi",
        label: "Kobi Sport",
        component: CareerKobi,
      },
      {
        key: "quicksell",
        label: "Quicksell",
        component: CareerQuicksell,
      },
      {
        key: "virgo",
        label: "Virgo",
        component: CareerVirgo,
      },
      {
        key: "tf2",
        label: "Nespoli",
        component: CareerNespoli,
      },
    ],
  },

  projects: {
    label: "PROJECTS",
    items: [
      {
        key: "overview",
        label: "Vue d'ensemble",
        component: ProjectsOverview,
      },
      {
        key: "cinematic",
        label: "Team Fortress 2 Helper",
        component: Tf2Project,
      },
      {
        key: "nespoli",
        label: "Nespoli",
        component: NespoliProject,
      },
      {
        key: "virgo",
        label: "Virgo",
        component: VirgoProject,
      },
    ],
  },

  contact: {
    label: "CONTACT",
    items: [
      {
        key: "overview",
        label: "Contact",
        component: Contact,
      },
      {
        key: "qrcode",
        label: "QR Code",
        component: ContactQrCodes,
      },
      {
        key: "cv",
        label: "CV",
        component: ContactCV,
      },
    ],
  },
};

const CATEGORY_KEYS = Object.keys(MENU);

export default function Portfolio({ visible }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("home");
  const [activeItem, setActiveItem] = useState(MENU.home.items[0].key);

  const currentCategory = MENU[activeCategory];

  const currentItem = useMemo(() => {
    return (
      currentCategory.items.find((item) => item.key === activeItem) ??
      currentCategory.items[0]
    );
  }, [activeItem, currentCategory]);

  const ActiveContent = currentItem.component;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage(
        (previousImage) => (previousImage + 1) % PORTFOLIO_IMAGES.length,
      );
    }, 4500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  function changeCategory(categoryKey) {
    const nextCategory = MENU[categoryKey];

    if (!nextCategory) {
      return;
    }

    setActiveCategory(categoryKey);
    setActiveItem(nextCategory.items[0].key);
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

  function moveSidebar(direction) {
    const currentItems = MENU[activeCategory].items;
    const currentIndex = currentItems.findIndex(
      (item) => item.key === activeItem,
    );

    const safeCurrentIndex = currentIndex === -1 ? 0 : currentIndex;

    const nextIndex =
      (safeCurrentIndex + direction + currentItems.length) %
      currentItems.length;

    setActiveItem(currentItems[nextIndex].key);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      const target = event.target;
      const tagName = target?.tagName;

      if (
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        tagName === "SELECT" ||
        target?.isContentEditable
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

  return (
    <section
      className={`portfolio gta-pause ${visible ? "portfolio--visible" : ""}`}
    >
      <div className="pause-slideshow" aria-hidden="true">
        {PORTFOLIO_IMAGES.map((image, index) => (
          <div
            key={image}
            className={`pause-slide ${
              index === currentImage ? "pause-slide--active" : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
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

          <img src={profileImage} alt="Portrait de Geoffrey Hallier" />
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
          <div
            key={`${activeCategory}-${currentItem.key}`}
            className="pause-panel__content"
          >
            <ActiveContent />
          </div>
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
