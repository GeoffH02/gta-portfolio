import ProjectDetail from "../components/ProjectDetail.jsx";

import backpacktfLogo from "../../../styles/img/backpacktf.png";
import reactLogo from "../../../styles/img/stack/react.svg";
import nodeLogo from "../../../styles/img/stack/node.svg";
import mongoLogo from "../../../styles/img/stack/mongodb.svg";

import tf2Screen1 from "../../../styles/img/projects/tf2-1.png";
import tf2Screen2 from "../../../styles/img/projects/tf2-2.png";

export default function Tf2Project() {
  return (
    <ProjectDetail
      logo={backpacktfLogo}
      title="TF2 Trading Helper"
      subtitle="Dashboard de trading Team Fortress 2"
      description="Suite complète dédiée au trading TF2 : dashboard d'administration, gestion de bots Steam, synchronisation Backpack.tf en temps réel, pricing avancé, inventaires, statistiques, alertes et automatisations."
      stack={[
        { name: "React", logo: reactLogo },
        { name: "Node.js", logo: nodeLogo },
        { name: "MongoDB", logo: mongoLogo },
      ]}
      images={[tf2Screen1, tf2Screen2]}
    />
  );
}
