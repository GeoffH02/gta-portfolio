import AccordionRow from "../../pages/components/AccordionRow/AccordionRow";

import {
  FaCode,
  FaGamepad,
  FaIndustry,
  FaWallet,
  FaStore,
  FaBriefcase,
  FaFlagCheckered,
} from "react-icons/fa";

const presentationItems = [
  {
    year: "2014",
    category: "DÉBUT",
    title: "Premiers pas",
    icon: FaCode,
    defaultOpen: true,
    content: (
      <p>
        J'ai commencé à apprendre le développement en 2014, en commençant par le
        C#. Rien de grandiose à cette époque : je passais mon temps sur Stack
        Overflow à récupérer du code intéressant et à l'intégrer dans mes
        projets, sans réellement comprendre pourquoi c'était fait comme ça, ni
        même pourquoi cela ne fonctionnait parfois pas.
      </p>
    ),
  },
  {
    year: "2015",
    category: "GAME DEV",
    title: "Arma 3",
    icon: FaGamepad,
    content: (
      <>
        <p>
          En 2015, j'ai fait la connaissance d'une personne sur Arma 3 qui m'a
          motivé à créer un serveur de jeu. Celui-ci nécessitait le
          développement de nombreux scripts : c'était mes premiers vrais pas
          dans la programmation.
        </p>

        <p>
          J'y ai appris à utiliser une documentation, à faire des recherches, à
          apprendre de mes erreurs et à adopter une véritable méthodologie de
          travail.
        </p>

        <p>
          Je suis resté plus d'un an sur ce projet, à développer quasiment nuit
          et jour. Au fil des mois, j'ai commencé à créer des scripts complets
          et complexes, avec des algorithmes assez poussés. Par exemple, j'avais
          développé un GPS capable de calculer des itinéraires en suivant les
          routes de la carte grâce à un algorithme conçu par mes soins.
        </p>
      </>
    ),
  },
  {
    year: "2018",
    category: "APPLICATION MÉTIER",
    title: "Nespoli Group",
    icon: FaIndustry,
    content: (
      <>
        <p>
          Par la suite, l'entreprise dans laquelle je travaillais m'a demandé de
          développer une application permettant de gérer les inventaires entre
          ses différents ateliers.
        </p>

        <p>
          L'application permettait notamment de suivre les pièces disponibles,
          d'alerter l'équipe lorsque certains stocks devenaient faibles et de
          déclencher automatiquement certaines commandes lorsque les seuils
          minimums étaient atteints.
        </p>

        <p>
          J'ai développé cette application avec PHP, SQL, Bootstrap et jQuery.
          Elle a été pensée comme un véritable outil métier destiné à l'équipe
          technique.
        </p>
      </>
    ),
  },
  {
    year: "2019",
    category: "WAC",
    title: "Virgo",
    icon: FaWallet,
    content: (
      <>
        <p>
          Quelques années plus tard, j'ai rejoint Epitech en WAC. Durant ces
          deux années, j'ai intégré l'entreprise Virgo, qui travaillait sur le
          développement d'une cryptomonnaie.
        </p>

        <p>
          J'étais principalement chargé du design du wallet sous forme
          d'extension web, ainsi que d'une partie du back-end. J'y ai développé
          un agenda, un carnet de contacts, un système d'airdrops permettant à
          d'autres cryptomonnaies de distribuer leurs tokens via le wallet, et
          j'ai également commencé l'intégration des NFT.
        </p>

        <p>
          Je n'ai malheureusement pas poursuivi l'aventure, mon contrat
          d'alternance arrivant à son terme.
        </p>
      </>
    ),
  },
  {
    year: "2023",
    category: "MARKETPLACE",
    title: "Quicksell",
    icon: FaStore,
    content: (
      <>
        <p>
          J'ai ensuite été sélectionné pour poursuivre mes études en MSC à
          Epitech. Entre-temps, j'ai rejoint Quicksell.store, où j'étais
          responsable de toute la partie front-end ainsi que d'une partie
          importante du back-end.
        </p>

        <p>
          C'était l'un de mes projets les plus importants : la plateforme
          accueillait plusieurs milliers d'utilisateurs chaque jour.
        </p>
      </>
    ),
  },
  {
    year: "2024",
    category: "MSC • ALTERNANCE",
    title: "Kobi Sport",
    icon: FaBriefcase,
    content: (
      <>
        <p>
          Pendant mon MSC, j'ai quitté cette entreprise pour rejoindre Kobi,
          dont les bureaux étaient basés à Lille, ce qui était beaucoup plus
          pratique que mon précédent poste situé en Russie.
        </p>

        <p>
          J'y suis resté deux ans et demi. Initialement alternant front-end,
          j'ai progressivement pris en charge toute la structure front des
          plateformes client et interne.
        </p>

        <p>
          J'ai eu l'occasion de travailler sur de nombreux projets d'envergure,
          notamment l'implémentation de challenges de pas permettant aux
          entreprises de créer des compétitions entièrement configurables entre
          leurs collaborateurs.
        </p>

        <p>
          J'ai également développé un système de facturation automatique et mis
          en place des tests end-to-end ainsi que des tests unitaires sur les
          deux plateformes afin d'améliorer leur fiabilité.
        </p>
      </>
    ),
  },
  {
    year: "2026",
    category: "AUJOURD'HUI",
    title: "Nouvelle étape",
    icon: FaFlagCheckered,
    current: true,
    content: (
      <>
        <p>
          Aujourd'hui, mes études sont terminées et mon contrat d'alternance
          touche à sa fin.
        </p>

        <p>
          Je suis désormais à la recherche d'un poste de développeur où je
          pourrai mettre à profit toutes ces années d'expérience, tout en
          continuant à apprendre et à évoluer.
        </p>
      </>
    ),
  },
];

export default function Presentation() {
  return (
    <div className="presentation-page">
      <div className="presentation-overview">
        <div>
          <span>PARCOURS</span>

          <h2>Mon évolution</h2>

          <p>
            De mes premiers scripts jusqu'aux applications Full Stack utilisées
            en production.
          </p>
        </div>

        <div className="presentation-overview__years">
          <strong>2014</strong>
          <span>→</span>
          <strong>2026</strong>
        </div>
      </div>

      <div className="presentation-career">
        {presentationItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`presentation-career__item ${
                item.current ? "presentation-career__item--current" : ""
              }`}
              style={{
                "--presentation-delay": `${index * 65}ms`,
              }}
            >
              <div className="presentation-career__aside">
                <Icon />

                <div>
                  <strong>{item.year}</strong>
                  <span>{item.category}</span>
                </div>
              </div>

              <div className="presentation-career__accordion">
                {item.current && (
                  <div className="presentation-career__current">
                    <span className="presentation-career__current-dot" />
                    ACTUEL
                  </div>
                )}

                <AccordionRow title={item.title} defaultOpen={item.defaultOpen}>
                  {item.content}
                </AccordionRow>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
