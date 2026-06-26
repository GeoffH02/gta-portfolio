import lilleMap from "../../styles/img/Lille-GTA-Map.png";

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
          <span>Statut</span>
          <strong>Full Stack Developer</strong>
        </div>
      </div>

      <div className="home-map">
        <div className="home-map-frame">
          <img src={lilleMap} alt="Carte GTA de Lille" />
        </div>
      </div>
    </div>
  );
}
