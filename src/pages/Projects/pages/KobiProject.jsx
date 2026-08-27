import ProjectDetail from "../components/ProjectDetail.jsx";

import kobiLogo from "../../../styles/img/projects/kobi.png";

import {
  FaCode,
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaPalette,
  FaChartLine,
  FaComments,
  FaListCheck,
  FaTrophy,
  FaGaugeHigh,
  FaVial,
} from "react-icons/fa6";

import {
  SiReact,
  SiTypescript,
  SiGraphql,
  SiFigma,
  SiNotion,
} from "react-icons/si";

export default function KobiProject() {
  return (
    <ProjectDetail
      logo={kobiLogo}
      title="Kobi Sport"
      subtitle="Plateformes sport & bien-être B2B / B2C"
      description="Développement et évolution des interfaces web de Kobi Sport destinées aux utilisateurs B2C, aux entreprises, aux clubs et aux équipes internes. J'étais en charge d'une grande partie du front-end des différentes plateformes, tout en participant activement à la conception produit, à l'optimisation des échanges GraphQL, à la qualité logicielle et aux échanges avec les clients."
      demoUrl="https://www.kobisport.eu/"
      meta={[
        {
          label: "TYPE",
          value: "Plateformes SaaS",
          icon: FaCode,
        },
        {
          label: "CONTEXTE",
          value: "Projet professionnel",
          icon: FaBriefcase,
        },
        {
          label: "RÔLE",
          value: "Développement Frontend",
          icon: FaPalette,
        },
        {
          label: "ENVIRONNEMENT",
          value: "B2B / B2C",
          icon: FaBuilding,
        },
      ]}
      highlights={[
        {
          icon: FaGaugeHigh,
          title: "Dashboards métier",
          description:
            "Développement et maintenance des dashboards entreprise, interne et club, avec des interfaces adaptées aux besoins de chaque type d'utilisateur.",
        },
        {
          icon: FaTrophy,
          title: "Système de challenges",
          description:
            "Conception et intégration des interfaces permettant de créer et gérer différents challenges sportifs : marche, vélo, squats et autres activités.",
        },
        {
          icon: FaChartLine,
          title: "GraphQL & performances",
          description:
            "Maintenance des schémas GraphQL côté front et optimisation des différents appels afin de limiter les requêtes inutiles et d'améliorer les performances.",
        },
        {
          icon: FaListCheck,
          title: "Tests automatisés",
          description:
            "Mise en place de Playwright sur les deux principales plateformes afin de couvrir les parcours critiques et de sécuriser les évolutions fonctionnelles.",
        },
        {
          icon: FaPalette,
          title: "Design & Figma",
          description:
            "Création de maquettes et conception d'interfaces avec Figma avant leur intégration dans les différentes applications web.",
        },
        {
          icon: FaComments,
          title: "Relation client",
          description:
            "Participation à des rendez-vous avec les clients afin de recueillir leurs retours, identifier leurs besoins et définir les axes d'amélioration du produit.",
        },
        {
          icon: SiNotion,
          title: "Gestion des tickets",
          description:
            "Gestion et suivi des demandes, bugs et évolutions fonctionnelles via Notion.",
        },
        {
          icon: FaUsers,
          title: "Méthodologie Scrum",
          description:
            "Travail en méthodologie Scrum avec réunions quotidiennes de suivi et planification des sprints toutes les deux semaines.",
        },
      ]}
      stack={[
        {
          name: "React",
          icon: SiReact,
          color: "#61DAFB",
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
          color: "#3178C6",
        },
        {
          name: "GraphQL",
          icon: SiGraphql,
          color: "#E10098",
        },
        {
          name: "Playwright",
          icon: FaVial,
          color: "#2EAD33",
        },
        {
          name: "Figma",
          icon: SiFigma,
          color: "#F24E1E",
        },
        {
          name: "Notion",
          icon: SiNotion,
          color: "#FFFFFF",
        },
      ]}
      confidential
      confidentialText="Les plateformes et dashboards sur lesquels j'ai travaillé étant des outils privés destinés aux équipes, entreprises et clubs clients de Kobi Sport, leurs interfaces et données ne peuvent pas être présentées publiquement pour des raisons de confidentialité."
    />
  );
}
