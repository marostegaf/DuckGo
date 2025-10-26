import { MapContainer, TileLayer } from "react-leaflet";
import Base from "./Base";

export default function Mapa({ dsinPosicao, dsinIcone }) {
  return (
    <MapContainer center={dsinPosicao} zoom={15} style={{ height: "100vh", width: "100vw" }}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Base 
      posicao={dsinPosicao} 
      icone={dsinIcone} />
    </MapContainer>
  );
}
