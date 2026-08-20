import CareerPanel from "../components/CareerPanel/CareerPanel";
import virgoLogo from "../../styles/img/projects/virgo.png";

export default function CareerVirgo() {
  return (
    <CareerPanel
      title="Virgo"
      subtitle="2022 — 2023"
      description="Participation au développement d'un wallet de cryptomonnaie proposé sous forme d'extension web."
      watermark={virgoLogo}
      rows={[
        {
          label: "Entreprise",
          value: "Virgo",
        },
        {
          label: "Domaine",
          value: "Cryptomonnaie • Blockchain",
        },
        {
          label: "Projet",
          value: "Wallet sous forme d'extension web",
        },
        {
          label: "Rôle principal",
          value: "Interface du wallet et partie backend",
        },
        {
          label: "Fonctionnalités",
          value: "Agenda • Contacts • Airdrops",
        },
        {
          label: "Web3",
          value: "Tokens • NFT • Gestion de wallet",
        },
        {
          label: "Formation",
          value: "Epitech WAC",
        },
      ]}
    />
  );
}
