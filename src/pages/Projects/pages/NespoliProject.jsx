import ProjectDetail from "../components/ProjectDetail.jsx";

import nespoliLogo from "../../../styles/img/projects/nespoli.jpg";

import { SiPhp, SiMysql, SiBootstrap, SiJquery } from "react-icons/si";

import {
  FaBoxesStacked,
  FaIndustry,
  FaTriangleExclamation,
  FaArrowsRotate,
  FaCode,
  FaBriefcase,
} from "react-icons/fa6";

import { FaUserCog } from "react-icons/fa";

export default function NespoliProject() {
  return (
    <ProjectDetail
      logo={nespoliLogo}
      title="Nespoli Group"
      subtitle="Application métier de gestion des stocks et inventaires"
      description="Application interne développée pour centraliser et simplifier la gestion des inventaires entre les différents ateliers de l'entreprise. Elle permet de suivre les pièces disponibles, d'identifier les stocks faibles et d'automatiser certaines actions liées au réapprovisionnement."
      meta={[
        {
          label: "TYPE",
          value: "Application métier",
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
          icon: FaUserCog,
        },
        {
          label: "STATUT",
          value: "Utilisé en production",
          status: true,
        },
      ]}
      highlights={[
        {
          icon: FaBoxesStacked,
          title: "Gestion des stocks",
          description:
            "Centralisation et suivi des pièces disponibles dans les différents ateliers.",
        },
        {
          icon: FaIndustry,
          title: "Multi-ateliers",
          description:
            "Gestion des inventaires et des besoins entre plusieurs ateliers de l'entreprise.",
        },
        {
          icon: FaTriangleExclamation,
          title: "Alertes de stock",
          description:
            "Détection des stocks faibles afin d'anticiper les besoins en réapprovisionnement.",
        },
        {
          icon: FaArrowsRotate,
          title: "Automatisation",
          description:
            "Déclenchement automatique de certaines commandes lorsque les seuils minimums sont atteints.",
        },
      ]}
      stack={[
        {
          name: "PHP",
          icon: SiPhp,
          color: "#777BB4",
        },
        {
          name: "MySQL",
          icon: SiMysql,
          color: "#4479A1",
        },
        {
          name: "Bootstrap",
          icon: SiBootstrap,
          color: "#7952B3",
        },
        {
          name: "jQuery",
          icon: SiJquery,
          color: "#0769AD",
        },
      ]}
      confidential
      confidentialText="Cette application étant un outil interne développé pour Nespoli Group, les interfaces et données du projet ne peuvent pas être présentées publiquement pour des raisons de confidentialité."
    />
  );
}
