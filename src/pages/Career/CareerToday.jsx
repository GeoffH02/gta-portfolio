import CareerPanel from "../components/CareerPanel/CareerPanel";
import profileImage from "../../styles/img/profile.jpg";

export default function CareerToday() {
  return (
    <CareerPanel
      title="Aujourd'hui"
      subtitle="Disponible immédiatement"
      description="Mes études étant terminées, je recherche une nouvelle équipe avec laquelle construire des applications utiles et ambitieuses."
      watermark={profileImage}
      rows={[
        {
          label: "Situation",
          value: "Études terminées",
        },
        {
          label: "Recherche",
          value: "Développeur Full Stack",
        },
        {
          label: "Localisation",
          value: "Lille et alentours",
        },
        {
          label: "Organisation",
          value: "Présentiel • Hybride • Télétravail",
        },
        {
          label: "Spécialités",
          value: "React • Node.js • GraphQL",
        },
        {
          label: "Objectif",
          value: "Créer des produits fiables, utiles et évolutifs",
        },
        {
          label: "Disponibilité",
          value: "Immédiate",
        },
      ]}
    />
  );
}
