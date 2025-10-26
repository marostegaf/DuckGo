import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const dsinIcone = new L.Icon({
  iconUrl: "/images/dsin-base.png",
  iconRetinaUrl: "/images/dsin-base.png",
  iconSize: [40, 40],
  shadowUrl: null
});

export default function Base({ posicao}) {
  return (
    <Marker position={posicao} icon={ dsinIcone }>
      <Popup>Base de Operações (DSIN)</Popup>
    </Marker>
  );
}
