import { useState } from "react";
import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiVite,
  SiNextdotjs,
} from "react-icons/si";

import { FaCss3Alt, FaHtml5 } from "react-icons/fa";

import StackRow from "../../../components/StackRow/StackRow";
import StackIcon from "../../../components/StackIcons/StackIcons";

const frontendCategories = [
  {
    id: "frontend",
    title: "Frontend",
    level: 95,
    description:
      "Développement d'interfaces web modernes avec React, Vue.js, JavaScript et TypeScript. Conception de composants réutilisables, gestion d'état et création d'applications SPA.",
    technologies: [
      { label: "React", shortLabel: "React", icon: SiReact, color: "#61DAFB" },
      {
        label: "Vue.js",
        shortLabel: "Vue",
        icon: SiVuedotjs,
        color: "#42B883",
      },
      {
        label: "TypeScript",
        shortLabel: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        label: "JavaScript",
        shortLabel: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
    ],
  },
  {
    id: "ui",
    title: "UI",
    level: 90,
    description:
      "Création d'interfaces responsives et cohérentes avec HTML, CSS, Tailwind CSS, Material UI et Bootstrap.",
    technologies: [
      { label: "HTML5", shortLabel: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { label: "CSS3", shortLabel: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      {
        label: "Tailwind CSS",
        shortLabel: "Tailwind",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        label: "Material UI",
        shortLabel: "MUI",
        icon: SiMui,
        color: "#007FFF",
      },
      {
        label: "Bootstrap",
        shortLabel: "Bootstrap",
        icon: SiBootstrap,
        color: "#7952B3",
      },
    ],
  },
  {
    id: "build",
    title: "Build",
    level: 85,
    description:
      "Configuration et optimisation de projets modernes avec Vite et Next.js, du développement local jusqu'à la production.",
    technologies: [
      { label: "Vite", shortLabel: "Vite", icon: SiVite, color: "#BD34FE" },
      {
        label: "Next.js",
        shortLabel: "Next.js",
        icon: SiNextdotjs,
        color: "#FFFFFF",
      },
    ],
  },
];

export default function FrontendStack() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    frontendCategories[0].id,
  );

  const selectedCategory =
    frontendCategories.find(({ id }) => id === selectedCategoryId) ??
    frontendCategories[0];

  const WatermarkIcon = selectedCategory.technologies[0].icon;
  const technologySummary = selectedCategory.technologies
    .map(({ label }) => label)
    .join(" • ");

  return (
    <div className="frontend-stack">
      <div className="frontend-stack__rows">
        {frontendCategories.map((category) => (
          <StackRow
            key={category.id}
            title={category.title}
            subtitle={category.technologies
              .map(({ shortLabel }) => shortLabel)
              .join(" • ")}
            level={category.level}
            active={selectedCategoryId === category.id}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            {category.technologies.map((technology) => (
              <StackIcon
                key={technology.label}
                icon={technology.icon}
                label={technology.shortLabel}
                title={technology.label}
                color={technology.color}
              />
            ))}
          </StackRow>
        ))}
      </div>

      <section key={selectedCategory.id} className="stack-description">
        <div
          className="stack-description__watermark"
          style={{
            "--watermark-color": selectedCategory.technologies[0].color,
          }}
          aria-hidden="true"
        >
          <WatermarkIcon />
        </div>

        <div className="stack-description__technologies">
          {selectedCategory.technologies.map((technology, index) => (
            <div
              key={technology.label}
              className="stack-description__technology"
              style={{ animationDelay: `${index * 65}ms` }}
            >
              <StackIcon
                icon={technology.icon}
                label={technology.label}
                title={technology.label}
                color={technology.color}
                large
              />
            </div>
          ))}
        </div>

        <div className="stack-description__separator" />

        <div className="stack-description__content">
          <h3>{selectedCategory.title}</h3>
          <p className="stack-description__summary">{technologySummary}</p>
          <p>{selectedCategory.description}</p>
        </div>
      </section>
    </div>
  );
}
