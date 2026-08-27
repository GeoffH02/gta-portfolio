import ProjectDetail from "../components/ProjectDetail.jsx";

import quicksellLogo from "../../../styles/img/projects/quicksell.svg";

import {
  FaCode,
  FaBriefcase,
  FaPalette,
  FaArrowTrendUp,
  FaPlug,
  FaVial,
  FaServer,
} from "react-icons/fa6";

import { SiReact, SiNodedotjs, SiMongodb, SiJest } from "react-icons/si";

import quicksellHome from "../../../styles/img/projects/Quicksell/Home.png";
import quicksellTrade from "../../../styles/img/projects/Quicksell/Trade.png";
import quicksellKeys from "../../../styles/img/projects/Quicksell/Keys.png";
import quicksellPremium from "../../../styles/img/projects/Quicksell/Premium.png";
import quicksellGiveaway from "../../../styles/img/projects/Quicksell/Giveaway.png";
import quicksellTickets from "../../../styles/img/projects/Quicksell/Tickets.png";
import quicksellAbout from "../../../styles/img/projects/Quicksell/AboutUs.png";

export default function QuicksellProject() {
  return (
    <ProjectDetail
      logo={quicksellLogo}
      title="Quicksell.store"
      subtitle="Marketplace et plateforme de trading automatisé"
      description="Participation au développement et à l'évolution de Quicksell.store, une plateforme de trading sur laquelle j'intervenais aussi bien sur le front-end que sur une partie importante du back-end. J'ai notamment participé à la refonte complète de l'interface vers React, développé un nouvel algorithme de pricing, travaillé sur l'intégration d'API et de plateformes externes et mis en place la stratégie de tests automatisés du projet."
      demoUrl="https://quicksell.store/"
      meta={[
        {
          label: "TYPE",
          value: "Marketplace",
          icon: FaCode,
        },
        {
          label: "CONTEXTE",
          value: "Projet professionnel",
          icon: FaBriefcase,
        },
        {
          label: "RÔLE",
          value: "Développement Full Stack",
          icon: FaServer,
        },
        {
          label: "STATUT",
          value: "En ligne",
          status: true,
        },
      ]}
      highlights={[
        {
          icon: FaPalette,
          title: "Refonte React",
          description:
            "Refonte de l'ancien design de la plateforme et migration vers une interface moderne développée avec React.",
        },
        {
          icon: FaArrowTrendUp,
          title: "Algorithme de pricing",
          description:
            "Développement d'un nouvel algorithme capable d'ajuster automatiquement les offres d'achat et de vente afin de rester compétitif sur le marché tout en conservant une marge de profit prédéfinie.",
        },
        {
          icon: FaPlug,
          title: "Intégrations externes",
          description:
            "Connexion de l'API Quicksell à différentes plateformes externes afin d'étendre la couverture du marché et d'exploiter davantage de sources de liquidité.",
        },
        {
          icon: FaServer,
          title: "Développement backend",
          description:
            "Participation importante au développement du back-end, à la logique métier et aux différents systèmes nécessaires au fonctionnement de la marketplace.",
        },
        {
          icon: FaVial,
          title: "Tests automatisés",
          description:
            "Mise en place des tests end-to-end avec Playwright et des tests unitaires avec Jest afin d'améliorer la fiabilité et de sécuriser les évolutions de la plateforme.",
        },
      ]}
      stack={[
        {
          name: "React",
          icon: SiReact,
          color: "#61DAFB",
        },
        {
          name: "Node.js",
          icon: SiNodedotjs,
          color: "#5FA04E",
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "#47A248",
        },
        {
          name: "Playwright",
          icon: FaVial,
          color: "#2EAD33",
        },
        {
          name: "Jest",
          icon: SiJest,
          color: "#C21325",
        },
      ]}
      images={[
        {
          src: quicksellHome,
          title: "Home",
          description:
            "Page d'accueil de Quicksell.store après la refonte de l'interface vers React.",
        },
        {
          src: quicksellTrade,
          title: "Trading",
          description:
            "Interface principale permettant aux utilisateurs d'acheter, vendre et échanger leurs objets sur la plateforme.",
        },
        {
          src: quicksellKeys,
          title: "Keys",
          description:
            "Interface dédiée à l'achat et à la vente de clés avec gestion dynamique des offres et des prix.",
        },
        {
          src: quicksellPremium,
          title: "Premium",
          description:
            "Présentation des fonctionnalités et avantages proposés aux utilisateurs Premium de la plateforme.",
        },
        {
          src: quicksellGiveaway,
          title: "Giveaways",
          description:
            "Système de giveaways intégré à la plateforme permettant d'organiser des événements pour la communauté.",
        },
        {
          src: quicksellTickets,
          title: "Support",
          description:
            "Système de tickets permettant aux utilisateurs de contacter directement l'équipe et de suivre leurs demandes.",
        },
        {
          src: quicksellAbout,
          title: "About Us",
          description:
            "Présentation de la plateforme et de son fonctionnement au travers de la nouvelle identité visuelle.",
        },
      ]}
    />
  );
}
