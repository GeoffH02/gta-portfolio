import { useState } from "react";

import StackRow from "../../../components/StackRow/StackRow";
import StackIcon from "../../../components/StackIcons/StackIcons";

import {
  SiGit,
  SiGithub,
  SiGitlab,
  SiJest,
  SiDocker,
  SiLinux,
  SiPm2,
  SiNginx,
  SiPostman,
  SiNpm,
  SiPnpm,
  SiYarn,
  SiFigma,
  SiOvh,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function PlaywrightIcon({ size = "1em", className }) {
  return (
    <img
      src="/icons/playwright.svg"
      alt=""
      aria-hidden="true"
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
      }}
    />
  );
}

const toolsCategories = [
  {
    id: "versioning",
    title: "Versioning",
    level: 95,
    description:
      "Gestion du code source avec Git, GitHub et GitLab. Travail en équipe, gestion des branches, résolution des conflits, pull requests, merge requests et suivi des évolutions du projet.",
    watermarkIcon: SiGit,
    watermarkColor: "#F05032",
    technologies: [
      {
        label: "Git",
        shortLabel: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        label: "GitHub",
        shortLabel: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
      },
      {
        label: "GitLab",
        shortLabel: "GitLab",
        icon: SiGitlab,
        color: "#FC6D26",
      },
    ],
  },
  {
    id: "testing",
    title: "Testing",
    level: 88,
    description:
      "Automatisation des tests end-to-end avec Playwright et réalisation de tests unitaires avec Jest afin de sécuriser les fonctionnalités et de limiter les régressions.",
    watermarkIcon: SiJest,
    watermarkColor: "#C21325",
    technologies: [
      {
        label: "Playwright",
        shortLabel: "Playwright",
        icon: PlaywrightIcon,
        color: "#2EAD33",
      },
      {
        label: "Jest",
        shortLabel: "Jest",
        icon: SiJest,
        color: "#C21325",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    level: 85,
    description:
      "Déploiement et administration d'applications sur des serveurs Linux. Gestion de VPS OVHcloud, conteneurisation avec Docker, configuration de Nginx et supervision des applications Node.js avec PM2.",
    watermarkIcon: SiDocker,
    watermarkColor: "#2496ED",
    technologies: [
      {
        label: "Linux",
        shortLabel: "Linux",
        icon: SiLinux,
        color: "#FCC624",
      },
      {
        label: "Docker",
        shortLabel: "Docker",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        label: "Nginx",
        shortLabel: "Nginx",
        icon: SiNginx,
        color: "#009639",
      },
      {
        label: "PM2",
        shortLabel: "PM2",
        icon: SiPm2,
        color: "#2B037A",
      },
      {
        label: "OVHcloud",
        shortLabel: "OVH",
        icon: SiOvh,
        color: "#123F6D",
      },
    ],
  },
  {
    id: "development-tools",
    title: "Outils",
    level: 92,
    description:
      "Utilisation quotidienne de Visual Studio Code, Postman et Figma pour le développement, le débogage, les tests d'API et la conception d'interfaces.",
    watermarkIcon: VscVscode,
    watermarkColor: "#007ACC",
    technologies: [
      {
        label: "Visual Studio Code",
        shortLabel: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
      },
      {
        label: "Postman",
        shortLabel: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        label: "Figma",
        shortLabel: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
      },
    ],
  },
  {
    id: "package-managers",
    title: "Package Manager",
    level: 90,
    description:
      "Gestion des dépendances, des scripts et des environnements de projets JavaScript avec npm, pnpm et Yarn.",
    watermarkIcon: SiNpm,
    watermarkColor: "#CB3837",
    technologies: [
      {
        label: "npm",
        shortLabel: "npm",
        icon: SiNpm,
        color: "#CB3837",
      },
      {
        label: "pnpm",
        shortLabel: "pnpm",
        icon: SiPnpm,
        color: "#F69220",
      },
      {
        label: "Yarn",
        shortLabel: "Yarn",
        icon: SiYarn,
        color: "#2C8EBB",
      },
    ],
  },
];

export default function ToolsStack() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    toolsCategories[0].id,
  );

  const selectedCategory =
    toolsCategories.find((category) => category.id === selectedCategoryId) ??
    toolsCategories[0];

  const WatermarkIcon = selectedCategory.watermarkIcon;

  return (
    <div className="frontend-stack">
      <div className="frontend-stack__rows">
        {toolsCategories.map((category) => (
          <StackRow
            key={category.id}
            title={category.title}
            subtitle={category.technologies
              .map((technology) => technology.shortLabel)
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

      <section
        key={selectedCategory.id}
        className="stack-description stack-description--animated"
      >
        {WatermarkIcon && (
          <div
            className="stack-description__watermark"
            style={{
              "--watermark-color": selectedCategory.watermarkColor,
            }}
            aria-hidden="true"
          >
            <WatermarkIcon />
          </div>
        )}

        <div className="stack-description__technologies">
          {selectedCategory.technologies.map((technology, index) => (
            <div
              key={technology.label}
              className="stack-description__technology"
              style={{
                animationDelay: `${index * 70}ms`,
              }}
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

          <span className="stack-description__subtitle">
            {selectedCategory.technologies
              .map((technology) => technology.label)
              .join(" • ")}
          </span>

          <p>{selectedCategory.description}</p>
        </div>
      </section>
    </div>
  );
}
