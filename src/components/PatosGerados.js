import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { gerarPatoAleatorio } from "../utils/gerarPatoAleatorio";
import { gerarDroneAleatorio } from "../utils/gerarDrone";
import InformacaoObtida from "./InformacaoObtida";

const patoIcone = new L.Icon({
  iconUrl: "/images/pato-icon.png",
  iconRetinaUrl: "/images/pato-icon.png",
  iconSize: [30, 30],
  shadowUrl: null
});

export default function PatosGerados({ basePosicao }) {
  const quantidade = Math.floor(Math.random() * 7) + 1;
  const raio = 0.05;

  function gerarPosicaoAleatoria() {
    const latitudeAleatoria = (Math.random() * 2 - 1) * raio;
    const longitudeAleatoria = (Math.random() * 2 - 1) * raio;
    return [basePosicao[0] + latitudeAleatoria, basePosicao[1] + longitudeAleatoria];
  }

  const posicoes = Array.from({ length: quantidade }, gerarPosicaoAleatoria);

  return (
    <>
      {posicoes.map((pos, index) => {
        const pato = gerarPatoAleatorio(index + 1, pos);
        const drone = gerarDroneAleatorio(index + 1);
        return (
          <Marker key={index} position={pos} icon={patoIcone}>
            <Popup>
              <InformacaoObtida pato={pato} drone={drone} />
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}
