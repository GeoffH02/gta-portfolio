import CareerPanel from "../components/CareerPanel/CareerPanel";
import kobiLogo from "../../styles/img/projects/kobi.png";

export default function CareerKobi() {
  return (
    <CareerPanel
      title="Kobi Sport"
      subtitle="2024 — 2026"
      description="Développement et évolution des plateformes client et interne de Kobi Sport."
      watermark={kobiLogo}
      rows={[
        {
          label: "Entreprise",
          value: "Kobi Sport",
        },
        {
          label: "Durée",
          value: "2 ans et demi",
        },
        {
          label: "Poste",
          value: "Développeur Frontend / Full Stack",
        },
        {
          label: "Localisation",
          value: "Lille, France",
        },
        {
          label: "Technologies",
          value: "React • GraphQL • Material UI • Playwright",
        },
        {
          label: "Frontend",
          value: "Plateformes client et administration",
        },
        {
          label: "Fonctionnalités",
          value: "Challenges • Facturation • Budgets • Offres",
        },
        {
          label: "Qualité",
          value: "Tests E2E • Tests unitaires • Playwright",
        },
      ]}
    />
  );
}
