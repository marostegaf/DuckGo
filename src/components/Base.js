import { Marker, Popup } from "react-leaflet";

export default function Base({ posicao, icone }) {
  return (
    <Marker position={posicao} icon={ icone }>
      <Popup>Base de Operações (DSIN)</Popup>
    </Marker>
  );
}
