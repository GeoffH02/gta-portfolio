import lilleMap from "../../styles/img/Lille-GTA-Map.png";

export default function HomeMap() {
  return (
    <div className="home-map-page">
      <div className="home-map-frame">
        <img src={lilleMap} alt="Carte GTA de Lille" />
      </div>
    </div>
  );
}
