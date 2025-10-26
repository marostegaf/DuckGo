import "./App.css";
import Mapa from "./components/Mapa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const dsinIcone = new L.Icon({
  iconUrl: "/images/dsin-base.png",
  iconRetinaUrl: "/images/dsin-base.png",
  iconSize: [40, 40],
  shadowUrl: null
});

const dsinPosicao = [-22.233653, -49.9341193];

export default function App() {
  return (
    <Mapa 
      dsinPosicao={dsinPosicao} 
      dsinIcone={dsinIcone} 
    />
  );
}
