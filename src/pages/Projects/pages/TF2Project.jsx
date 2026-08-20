import ProjectDetail from "../components/ProjectDetail.jsx";

import {
  FaRobot,
  FaBolt,
  FaTags,
  FaHistory,
  FaUsers,
  FaCode,
  FaUserCog,
  FaChartLine,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
} from "react-icons/si";

import backpacktfLogo from "../../../styles/img/projects/backpacktf.png";

import tf2Screen1 from "../../../styles/img/projects/TF2/Deals.png";
import tf2Screen2 from "../../../styles/img/projects/TF2/Listings.png";
import tf2Screen3 from "../../../styles/img/projects/TF2/Logs.png";
import tf2Screen4 from "../../../styles/img/projects/TF2/Pricing.png";
import tf2Screen5 from "../../../styles/img/projects/TF2/Trades.png";
import tf2Screen6 from "../../../styles/img/projects/TF2/UsersLogs.png";

export default function Tf2Project() {
  return (
    <ProjectDetail
      logo={backpacktfLogo}
      title="TF2 Trading Helper"
      subtitle="Plateforme de trading et d'automatisation Team Fortress 2"
      status="PROJET ACTIF"
      description="Suite complète développée pour centraliser et automatiser mon activité de trading sur Team Fortress 2. L'application regroupe la gestion des bots Steam, le suivi du marché Backpack.tf, le pricing, les inventaires, les échanges, les utilisateurs, les statistiques et différents systèmes d'automatisation."
      meta={[
        {
          label: "TYPE",
          value: "Application Full Stack",
          icon: FaCode,
        },
        {
          label: "STATUT",
          status: true,
        },
        {
          label: "RÔLE",
          value: "Conception & développement",
          icon: FaUserCog,
        },
        {
          label: "DOMAINE",
          value: "Trading / Automation",
          icon: FaChartLine,
        },
      ]}
      highlights={[
        {
          label: "Gestion de plusieurs bots Steam",
          icon: FaRobot,
        },
        {
          label: "Suivi du marché en temps réel",
          icon: FaBolt,
        },
        {
          label: "Pricing et outbid automatisés",
          icon: FaTags,
        },
        {
          label: "Historique complet des échanges",
          icon: FaHistory,
        },
        {
          label: "Statistiques et suivi des utilisateurs",
          icon: FaUsers,
        },
        {
          label: "Dashboard d'administration centralisé",
          icon: FaCode,
        },
      ]}
      stack={[
        {
          name: "React",
          icon: SiReact,
          color: "#61dafb",
        },
        {
          name: "Node.js",
          icon: SiNodedotjs,
          color: "#5fa04e",
        },
        {
          name: "Express",
          icon: SiExpress,
          color: "#ffffff",
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "#47a248",
        },
        {
          name: "WebSocket",
          icon: SiSocketdotio,
          color: "#ffffff",
        },
      ]}
      images={[
        {
          src: tf2Screen1,
          title: "Deals",
          description:
            "Détection et centralisation des opportunités de trading avec affichage des prix, attributs des objets et accès rapide aux échanges.",
        },
        {
          src: tf2Screen2,
          title: "Listing Changes",
          description:
            "Surveillance des modifications des listings concurrents avec comparaison des anciennes et nouvelles descriptions et outils d'outbid.",
        },
        {
          src: tf2Screen4,
          title: "Price Manager",
          description:
            "Gestion centralisée des prix, détection des meilleurs buy orders et configuration des prix spécifiques aux spells et variantes.",
        },
        {
          src: tf2Screen5,
          title: "Trade History",
          description:
            "Historique détaillé des échanges Steam avec statut, partenaire, prix attendu, prix payé et attributs des objets.",
        },
        {
          src: tf2Screen6,
          title: "Users Logs",
          description:
            "Suivi des utilisateurs ayant interagi avec les bots, statistiques des échanges et historique des interactions.",
        },
        {
          src: tf2Screen3,
          title: "Bot Monitoring",
          description:
            "Logs temps réel permettant de surveiller les bots, les WebSockets, les erreurs, les mises à jour et les automatisations.",
        },
      ]}
    />
  );
}
