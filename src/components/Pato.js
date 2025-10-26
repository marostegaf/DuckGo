import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const patoIcone = new L.Icon({
  iconUrl: "/images/pato-icon.png",
  iconRetinaUrl: "/images/pato-icon.png",
  iconSize: [30, 30],
  shadowUrl: null,
});

export default function Pato({ posicao }) {
  return (
    <Marker position={posicao} icon={patoIcone}>
      <Popup>Pato selvagem!</Popup>
    </Marker>
  );
}
