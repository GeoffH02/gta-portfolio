import {
  FaGraduationCap,
  FaSchool,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";

const education = [
  {
    id: "01",
    period: "2016 — 2019",
    school: "Lycée Joliot-Curie",
    location: "Hirson",
    degree: "Bac professionnel",
    description:
      "Formation professionnelle avant mon orientation définitive vers le développement web.",
    icon: FaSchool,
  },
  {
    id: "02",
    period: "2021 — 2023",
    school: "Epitech",
    location: "Lille",
    degree: "Web@cadémie",
    description:
      "Formation orientée développement web, avec de nombreux projets individuels et en équipe.",
    icon: FaLaptopCode,
  },
  {
    id: "03",
    period: "2023 — 2026",
    school: "Epitech",
    location: "Lille",
    degree: "MSC Pro",
    description:
      "Formation en alternance permettant de consolider mes compétences Full Stack, la gestion de projet et mon expérience professionnelle.",
    icon: FaGraduationCap,
  },
];

export default function EducationJourney() {
  return (
    <div className="education-page">
      <div className="education-header">
        <div>
          <span className="education-header__eyebrow">FORMATION</span>

          <h2>Parcours scolaire</h2>

          <p>
            Mon parcours académique et les formations qui ont accompagné mon
            évolution dans le développement.
          </p>
        </div>

        <span className="education-header__count">
          {String(education.length).padStart(2, "0")}
        </span>
      </div>

      <div className="education-list">
        {education.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.id}
              className={`education-item ${
                item.completed ? "education-item--completed" : ""
              }`}
              style={{
                "--education-delay": `${index * 80}ms`,
              }}
            >
              <div className="education-item__index">{item.id}</div>

              <div className="education-item__icon">
                <Icon />
              </div>

              <div className="education-item__content">
                <div className="education-item__top">
                  <div>
                    <span className="education-item__period">
                      {item.period}
                    </span>

                    <h3>{item.degree}</h3>
                  </div>

                  {item.completed && (
                    <div className="education-item__status">
                      <span className="status-dot" />
                      TERMINÉ
                    </div>
                  )}
                </div>

                <div className="education-item__school">
                  <strong>{item.school}</strong>

                  <span>{item.location}</span>
                </div>

                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
