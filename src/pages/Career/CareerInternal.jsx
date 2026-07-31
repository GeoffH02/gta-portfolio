import CareerPanel from "../components/CareerPanel/CareerPanel";

export default function CareerInternal() {
  return (
    <CareerPanel
      title="Application interne"
      subtitle="Application métier"
      description="Conception d'une application d'inventaire destinée à synchroniser les stocks entre plusieurs usines."
      rows={[
        {
          label: "Projet",
          value: "Application de gestion d'inventaire",
        },
        {
          label: "Contexte",
          value: "Utilisation industrielle",
        },
        {
          label: "Objectif",
          value: "Gérer les inventaires entre plusieurs usines",
        },
        {
          label: "Responsabilité",
          value: "Conception et développement complet",
        },
        {
          label: "Utilisateurs",
          value: "Équipes internes de l'entreprise",
        },
        {
          label: "Résultat",
          value: "Application toujours utilisée aujourd'hui",
        },
      ]}
    />
  );
}
