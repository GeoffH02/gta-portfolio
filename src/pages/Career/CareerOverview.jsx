import CareerPanel from "../components/CareerPanel/CareerPanel";
import profileImage from "../../styles/img/profile.jpg";

export default function CareerOverview() {
  return (
    <CareerPanel
      title="Parcours professionnel"
      subtitle="Vue d'ensemble"
      description="Une évolution construite autour de projets web, d'applications métier et de plateformes utilisées à grande échelle."
      watermark={profileImage}
      rows={[
        {
          label: "Profil",
          value: "Développeur Full Stack",
        },
        {
          label: "Expérience",
          value: "Développement depuis 2014",
        },
        {
          label: "Dernier poste",
          value: "Développeur Frontend / Full Stack",
        },
        {
          label: "Stack principale",
          value: "React • Node.js • GraphQL • MongoDB",
        },
        {
          label: "Domaines",
          value: "SaaS • Applications métier • Trading • Crypto",
        },
        {
          label: "Localisation",
          value: "Lille, France",
        },
        {
          label: "Disponibilité",
          value: "Immédiate",
        },
      ]}
    />
  );
}
