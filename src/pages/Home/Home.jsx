const informations = [
  {
    label: "Nom",
    value: "Hallier",
  },
  {
    label: "Prénom",
    value: "Geoffrey",
  },
  {
    label: "Profession",
    value: "Développeur Full Stack",
  },
  {
    label: "Localisation",
    value: "Lille, France",
  },
  {
    label: "Email",
    value: "geoffrey02@orange.fr",
  },
  {
    label: "Téléphone",
    value: "Non public",
  },
  {
    label: "Permis",
    value: "Permis B / Véhiculé",
  },
  {
    label: "Langues",
    value: "🇫🇷 Français (Natif) · 🇬🇧 Anglais (B2/C1)",
  },
  {
    label: "Études",
    value: "MSC Pro - Epitech Lille",
  },
  {
    label: "Expérience",
    value: "~ 8 ans",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-infos">
        {informations.map((information, index) => (
          <div
            key={information.label}
            className="pause-row home-info-row"
            style={{
              "--home-row-delay": `${index * 65}ms`,
            }}
          >
            <span>{information.label}</span>
            <strong>{information.value}</strong>
          </div>
        ))}

        <div
          className="pause-row home-info-row home-info-row--status"
          style={{
            "--home-row-delay": `${informations.length * 65}ms`,
          }}
        >
          <span>Statut</span>

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
