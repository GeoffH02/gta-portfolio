export default function Home() {
  return (
    <div className="home-page">
      <div className="home-infos">
        <div className="pause-row">
          <span>Nom</span>
          <strong>Hallier</strong>
        </div>

        <div className="pause-row">
          <span>Prénom</span>
          <strong>Geoffrey</strong>
        </div>

        <div className="pause-row">
          <span>Localisation</span>
          <strong>Lille, France</strong>
        </div>
        <div className="pause-row">
          <span>Email</span>
          <strong>geoffrey02@orange.fr</strong>
        </div>
        <div className="pause-row">
          <span>Téléphone</span>
          <strong>Non public</strong>
        </div>
        <div className="pause-row">
          <span>Permis</span>
          <strong>Permis B / Véhiculé</strong>
        </div>
        <div className="pause-row">
          <span>Languages</span>
          <strong>Français Natif / Anglais Bilingue</strong>
        </div>
        <div className="pause-row">
          <span>Statut</span>
          <strong className="status-online">
            <span className="status-dot" />
            Disponible
          </strong>
        </div>
      </div>
    </div>
  );
}
