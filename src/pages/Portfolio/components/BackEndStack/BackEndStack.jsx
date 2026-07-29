import { useState } from "react";

import StackRow from "../../../components/StackRow/StackRow";
import StackIcon from "../../../components/StackIcons/StackIcons";

import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiPostman,
  SiJsonwebtokens,
  SiSocketdotio,
  SiMongodb,
  SiMongoose,
  SiMysql,
} from "react-icons/si";

import { TbWorldWww } from "react-icons/tb";

const backendCategories = [
  {
    id: "frameworks",
    title: "Frameworks",
    level: 92,
    description:
      "Développement d'applications backend avec Node.js, Express et NestJS. Architecture modulaire, APIs performantes et logique métier.",
    watermarkIcon: SiNodedotjs,
    watermarkColor: "#339933",
    technologies: [
      {
        label: "Node.js",
        shortLabel: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
      },
      {
        label: "Express",
        shortLabel: "Express",
        icon: SiExpress,
        color: "#FFFFFF",
      },
      {
        label: "NestJS",
        shortLabel: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
      },
    ],
  },
  {
    id: "api",
    title: "API",
    level: 90,
    description:
      "Conception et consommation d'APIs REST et GraphQL, sécurisation des échanges avec JWT et tests des endpoints avec Postman.",
    watermarkIcon: SiGraphql,
    watermarkColor: "#E10098",
    technologies: [
      {
        label: "GraphQL",
        shortLabel: "GraphQL",
        icon: SiGraphql,
        color: "#E10098",
      },
      {
        label: "REST",
        shortLabel: "REST",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        label: "JWT",
        shortLabel: "JWT",
        icon: SiJsonwebtokens,
        color: "#D63AFF",
      },
    ],
  },
  {
    id: "realtime",
    title: "Realtime",
    level: 90,
    description:
      "Création de fonctionnalités temps réel avec Socket.io et WebSocket pour la diffusion d'événements et la synchronisation des données.",
    watermarkIcon: SiSocketdotio,
    watermarkColor: "#FFFFFF",
    technologies: [
      {
        label: "Socket.io",
        shortLabel: "Socket.io",
        icon: SiSocketdotio,
        color: "#FFFFFF",
      },
      {
        label: "WebSocket",
        shortLabel: "WebSocket",
        icon: TbWorldWww,
        color: "#61DAFB",
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    level: 86,
    description:
      "Conception et gestion de bases de données MongoDB et SQL, avec Mongoose pour la modélisation des données côté Node.js.",
    watermarkIcon: SiMongodb,
    watermarkColor: "#47A248",
    technologies: [
      {
        label: "MongoDB",
        shortLabel: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        label: "Mongoose",
        shortLabel: "Mongoose",
        icon: SiMongoose,
        color: "#880000",
      },
      {
        label: "SQL",
        shortLabel: "SQL",
        icon: SiMysql,
        color: "#4479A1",
      },
    ],
  },
];

export default function BackendStack() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    backendCategories[0].id,
  );

  const selectedCategory =
    backendCategories.find((category) => category.id === selectedCategoryId) ??
    backendCategories[0];

  const WatermarkIcon = selectedCategory.watermarkIcon;

  return (
    <div className="frontend-stack">
      <div className="frontend-stack__rows">
        {backendCategories.map((category) => (
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
