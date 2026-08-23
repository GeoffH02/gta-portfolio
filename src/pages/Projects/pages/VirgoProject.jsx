import ProjectDetail from "../components/ProjectDetail.jsx";

import virgoLogo from "../../../styles/img/projects/virgo.png";

import {
  FaWallet,
  FaPalette,
  FaLightbulb,
  FaGift,
  FaCode,
  FaBriefcase,
  FaPuzzlePiece,
  FaLink,
} from "react-icons/fa";

import { SiReact } from "react-icons/si";

import virgoAirdrops from "../../../styles/img/projects/virgo/Airdrops.png";
import virgoSendReceive from "../../../styles/img/projects/virgo/CryptoSendandReceive.png";
import virgoNFT from "../../../styles/img/projects/virgo/NFT.png";
import virgoSwap from "../../../styles/img/projects/virgo/Swap.png";
import virgoWalletOverview from "../../../styles/img/projects/virgo/WalletOverview.png";

export default function VirgoProject() {
  return (
    <ProjectDetail
      logo={virgoLogo}
      title="Virgo Wallet"
      subtitle="Wallet crypto sous forme d'extension web"
      description="Participation à la conception et au développement du wallet Virgo. Mon rôle était principalement centré sur la création des interfaces, la recherche de nouvelles fonctionnalités et l'intégration de celles-ci dans le produit. J'ai notamment travaillé sur les airdrops, les échanges de cryptomonnaies, la gestion des NFT et différentes fonctionnalités destinées à améliorer l'expérience utilisateur."
      demoUrl="https://www.virgo.net/"
      meta={[
        {
          label: "TYPE",
          value: "Wallet crypto",
          icon: FaWallet,
        },
        {
          label: "CONTEXTE",
          value: "Projet professionnel",
          icon: FaBriefcase,
        },
        {
          label: "RÔLE",
          value: "UI / UX & Frontend",
          icon: FaPalette,
        },
        {
          label: "DOMAINE",
          value: "Blockchain / Web3",
          icon: FaLink,
        },
      ]}
      highlights={[
        {
          icon: FaPalette,
          title: "Design du wallet",
          description:
            "Conception des interfaces du wallet et réflexion autour de l'expérience utilisateur de l'extension.",
        },
        {
          icon: FaGift,
          title: "Système d'airdrops",
          description:
            "Conception et intégration d'un système permettant la distribution de tokens directement depuis le wallet à la suite d'événements ou d'opérations spécifiques.",
        },
        {
          icon: FaLightbulb,
          title: "Amélioration produit",
          description:
            "Recherche régulière de nouvelles idées et fonctionnalités pouvant améliorer le wallet et enrichir l'expérience proposée aux utilisateurs.",
        },
        {
          icon: FaCode,
          title: "Design & intégration",
          description:
            "Production des maquettes et interfaces puis mise en place concrète de celles-ci dans l'application.",
        },
      ]}
      stack={[
        {
          name: "React",
          icon: SiReact,
          color: "#61dafb",
        },
        {
          name: "Blockchain",
          icon: FaLink,
          color: "#69c1df",
        },
        {
          name: "Extension Web",
          icon: FaPuzzlePiece,
          color: "#ffffff",
        },
      ]}
      images={[
        {
          src: virgoWalletOverview,
          title: "Wallet Overview",
          description:
            "Vue principale du wallet permettant de consulter rapidement les actifs, les informations du compte et les différentes fonctionnalités disponibles.",
        },
        {
          src: virgoSendReceive,
          title: "Send & Receive",
          description:
            "Interfaces dédiées à l'envoi et à la réception de cryptomonnaies directement depuis le wallet.",
        },
        {
          src: virgoSwap,
          title: "Crypto Swap",
          description:
            "Interface permettant d'échanger simplement différents actifs depuis le wallet.",
        },
        {
          src: virgoAirdrops,
          title: "Airdrops",
          description:
            "Fonctionnalité permettant de distribuer des tokens aux utilisateurs directement depuis le wallet dans le cadre d'événements ou de campagnes spécifiques.",
        },
        {
          src: virgoNFT,
          title: "NFT",
          description:
            "Travail autour de l'intégration et de l'affichage des NFT directement au sein du wallet.",
        },
      ]}
    />
  );
}
