import "./App.css";
import Mapa from "./components/Mapa";
import "leaflet/dist/leaflet.css";


const dsinPosicao = [-22.233653, -49.9341193];

export default function App() {
  return (
    <Mapa 
      dsinPosicao={dsinPosicao} 
    />
  );
}
