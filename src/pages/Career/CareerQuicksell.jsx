import CareerPanel from "../components/CareerPanel/CareerPanel";
import quicksellLogo from "../../styles/img/projects/quicksell.svg";

export default function CareerQuicksell() {
  return (
    <CareerPanel
      title="Quicksell.store"
      subtitle="2024 — 2025"
      description="Développement du frontend principal et participation importante à l'architecture backend."
      watermark={quicksellLogo}
      rows={[
        {
          label: "Entreprise",
          value: "Quicksell.store",
        },
        {
          label: "Poste",
          value: "Développeur Frontend & Backend",
        },
        {
          label: "Responsabilité",
          value: "Responsable de l'ensemble du frontend",
        },
        {
          label: "Audience",
          value: "Plusieurs milliers d'utilisateurs par jour",
        },
        {
          label: "Technologies",
          value: "Vue.js • Node.js • MongoDB",
        },
        {
          label: "Backend",
          value: "APIs • Logique métier • Intégrations",
        },
        {
          label: "Enjeux",
          value: "Performances • Fiabilité • Expérience utilisateur",
        },
      ]}
    />
  );
}
