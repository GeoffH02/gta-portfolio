import SkillBar from "../components/SkillBar/SkillBar";

import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const stack = [
  {
    label: "Frontend",
    level: 95,
    levelLabel: "AVANCÉ",
    description: "React, TypeScript, interfaces métier, UI complexes",
    icon: FaCode,
  },
  {
    label: "Backend",
    level: 90,
    levelLabel: "AVANCÉ",
    description: "Node.js, Express, NestJS, REST, GraphQL",
    icon: FaServer,
  },
  {
    label: "Database",
    level: 85,
    levelLabel: "CONFIRMÉ",
    description: "MongoDB, Mongoose, MySQL, modélisation de données",
    icon: FaDatabase,
  },
  {
    label: "Outils",
    level: 70,
    levelLabel: "BON NIVEAU",
    description: "Git, Docker, Linux, PM2, Playwright, Postman",
    icon: FaTools,
  },
];

export default function Stack() {
  return (
    <div className="stack-overview">
      <div className="stack-overview__header">
        <div>
          <span className="stack-overview__eyebrow">STACK</span>

          <h2>Vue d'ensemble</h2>

          <p>
            Une synthèse de mon expérience sur les principales briques de mon
            environnement de développement.
          </p>
        </div>

        <div className="stack-overview__summary">
          <span>PROFIL</span>
          <strong>FULL STACK</strong>
        </div>
      </div>

      <div className="stack-overview__list">
        {stack.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="pause-row stack-overview__row"
              style={{
                "--row-delay": `${index * 90}ms`,
              }}
            >
              <div className="stack-overview__identity">
                <div className="stack-overview__icon">
                  <Icon />
                </div>

                <div className="stack-overview__info">
                  <div className="stack-overview__title">
                    <strong>{item.label}</strong>
                  </div>
                </div>
              </div>

              <div className="stack-content">
                <div className="stack-overview__level">
                  <span>{item.levelLabel}</span>
                </div>

                <SkillBar level={item.level} animationDelay={index * 90} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
