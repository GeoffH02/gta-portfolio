import CareerPanel from "../components/CareerPanel/CareerPanel";
import nespoliLogo from "../../styles/img/projects/nespoli.jpg";

export default function CareerNespoli() {
  return (
    <CareerPanel
      title="Nespoli"
      subtitle="2020"
      watermark={nespoliLogo}
      description="Développement d'une application interne de gestion d'inventaire destinée à l'équipe technique, permettant de suivre les pièces de l'atelier et d'automatiser le réapprovisionnement."
      rows={[
        {
          label: "Entreprise",
          value: "Nespoli",
        },
        {
          label: "Projet",
          value: "Application de gestion d'inventaire",
        },
        {
          label: "Stack",
          value: "PHP • SQL • Bootstrap • jQuery",
        },
        {
          label: "Utilisateurs",
          value: "Équipe technique",
        },
        {
          label: "Inventaire",
          value: "Pièces • Références • Quantités • Stocks",
        },
        {
          label: "Surveillance",
          value: "Suivi automatique des niveaux de stock",
        },
        {
          label: "Alertes",
          value: "Avertissement en cas de stock insuffisant",
        },
        {
          label: "Automatisation",
          value: "Commandes automatiques sous le seuil minimum",
        },
        {
          label: "Objectif",
          value: "Anticiper les ruptures et simplifier le réapprovisionnement",
        },
        {
          label: "Résultat",
          value: "Application utilisée en interne",
        },
      ]}
    />
  );
}
