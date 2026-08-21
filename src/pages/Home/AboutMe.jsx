import { useState } from "react";

import {
  FaHiking,
  FaUtensils,
  FaHeadphones,
  FaRecordVinyl,
  FaGamepad,
  FaChevronDown,
} from "react-icons/fa";

const hobbies = [
  {
    title: "Randonnée",
    icon: FaHiking,
    tag: "ENDURANCE",
    stat: "20 000+",
    statLabel: "PAS / JOUR",
    content: [
      "J'adore marcher et j'en fais autant que possible chaque jour : pendant la pause du midi, le matin pour aller travailler, le soir pour rentrer du travail et parfois même à la salle de sport.",
      "Il me faut au moins 20 000 pas par jour pour considérer que la journée a été suffisamment active.",
      "Le week-end, il m'arrive de consulter Visorando puis de partir pour plusieurs heures de marche, généralement sur des parcours de plus de 20 km.",
    ],
  },
  {
    title: "Cuisine",
    icon: FaUtensils,
    tag: "CRÉATIVITÉ",
    stat: "100%",
    statLabel: "EXPÉRIMENTAL",
    content: [
      "La cuisine fait partie de mes hobbies, même si je suis loin d'être un grand cuisinier. J'aime tester de nouvelles recettes et expérimenter avec ce que j'ai sous la main.",
      "Cela finit parfois en pâtes au beurre, mais il y a toujours l'envie d'essayer quelque chose de nouveau.",
    ],
  },
  {
    title: "DJing",
    icon: FaHeadphones,
    tag: "MUSIQUE",
    stat: "VINYL",
    statLabel: "MIX",
    content: [
      "J'ai découvert le DJing totalement par hasard avec des amis au cours d'une soirée. J'ai commencé pour m'amuser, puis je m'y suis progressivement investi davantage.",
      "Cela me permet d'exprimer un côté artistique, un peu comme lorsque je conçois une interface ou développe un site web.",
      "Je pratique avant tout pour moi et pour le plaisir.",
    ],
  },
  {
    title: "Collection de vinyles",
    icon: FaRecordVinyl,
    tag: "COLLECTION",
    stat: "~400",
    statLabel: "VINYLES",
    content: [
      "Les vinyles sont devenus une véritable passion peu après mes débuts dans le DJing.",
      "J'ai acheté mes premiers disques progressivement, jusqu'à constituer aujourd'hui une collection d'environ 400 vinyles.",
    ],
  },
  {
    title: "Jeux vidéo",
    icon: FaGamepad,
    tag: "GAMING",
    stat: "13 ANS",
    statLabel: "DÉBUT DU MODDING",
    content: [
      "J'aime les jeux vidéo depuis mon enfance et mes goûts sont assez variés. Je peux aussi bien jouer à Call of Duty qu'à Farming Simulator ou The Last of Us.",
      "Dès l'âge de 13 ans, je me suis passionné pour le modding. J'ai commencé à créer des scripts et du contenu pour des jeux comme Arma 3, Left 4 Dead 2 ou Garry's Mod.",
      "Cette passion est l'une des principales raisons qui m'ont conduit vers le développement.",
    ],
  },
];

export default function AboutMe() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="about-me-page">
      <div className="about-me-header">
        <div className="about-me-header__content">
          <span className="about-me-header__eyebrow">HOBBIES</span>

          <h2>En dehors du code</h2>

          <p>
            Quelques passions qui occupent mon temps libre et reflètent aussi
            une partie de ma personnalité.
          </p>
        </div>

        <div className="about-me-header__count">
          <strong>{String(hobbies.length).padStart(2, "0")}</strong>
          <span>PASSIONS</span>
        </div>
      </div>

      <div className="about-me-list">
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon;
          const isOpen = openIndex === index;

          return (
            <article
              key={hobby.title}
              className={`about-me-card ${isOpen ? "about-me-card--open" : ""}`}
              style={{
                "--about-delay": `${index * 60}ms`,
              }}
            >
              <button
                type="button"
                className="about-me-card__trigger"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <div className="about-me-card__icon-column">
                  <Icon />

                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="about-me-card__identity">
                  <strong>{hobby.title}</strong>
                  <span>{hobby.tag}</span>
                </div>

                <div className="about-me-card__stat">
                  <strong>{hobby.stat}</strong>
                  <span>{hobby.statLabel}</span>
                </div>

                <div className="about-me-card__action">
                  <FaChevronDown />
                </div>
              </button>

              <div className="about-me-card__collapse">
                <div className="about-me-card__body">
                  <div className="about-me-card__body-line" />

                  <div className="about-me-card__body-content">
                    {hobby.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
