import {
  FaUser,
  FaIdCard,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCar,
  FaLanguage,
  FaGraduationCap,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";

const informations = [
  {
    label: "Nom",
    value: "Hallier",
    icon: FaIdCard,
  },
  {
    label: "Prénom",
    value: "Geoffrey",
    icon: FaUser,
  },
  {
    label: "Profession",
    value: "Développeur Full Stack",
    icon: FaBriefcase,
  },
  {
    label: "Localisation",
    value: "Lille, France",
    icon: FaMapMarkerAlt,
  },
  {
    label: "Email",
    value: "geoffrey02@orange.fr",
    icon: FaEnvelope,
  },
  {
    label: "Téléphone",
    value: "Non public",
    icon: FaPhoneAlt,
  },
  {
    label: "Permis",
    value: "Permis B / Véhiculé",
    icon: FaCar,
  },
  {
    label: "Langues",
    value: "🇫🇷 Français (Natif) · 🇬🇧 Anglais (B2/C1)",
    icon: FaLanguage,
  },
  {
    label: "Études",
    value: "MSC Pro - Epitech Lille",
    icon: FaGraduationCap,
  },
  {
    label: "Expérience",
    value: "~ 8 ans",
    icon: FaLaptopCode,
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-infos">
        {informations.map((information, index) => {
          const Icon = information.icon;

          return (
            <div
              key={information.label}
              className="pause-row home-info-row"
              style={{
                "--home-row-delay": `${index * 65}ms`,
              }}
            >
              <span className="home-info-row__label">
                <Icon />
                {information.label}
              </span>

              <strong>{information.value}</strong>
            </div>
          );
        })}

        <div
          className="pause-row home-info-row home-info-row--status"
          style={{
            "--home-row-delay": `${informations.length * 65}ms`,
          }}
        >
          <span className="home-info-row__label">
            <FaCheckCircle />
            Statut
          </span>

          <strong className="status-online">
            <span className="status-dot" />

            <span className="status-online__text">
              Disponible immédiatement
            </span>
          </strong>
        </div>
      </div>
    </div>
  );
}
