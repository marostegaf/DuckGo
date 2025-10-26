import React, { useState, useEffect } from "react";
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
  // Quantidade é gerada apenas uma vez
  const [quantidade] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [patos, setPatos] = useState([]);
  const raio = 0.05;

  // Gera posição aleatória dentro do raio
  function gerarPosicaoAleatoria() {
    const latitudeAleatoria = (Math.random() * 2 - 1) * raio;
    const longitudeAleatoria = (Math.random() * 2 - 1) * raio;
    return [basePosicao[0] + latitudeAleatoria, basePosicao[1] + longitudeAleatoria];
  }

  useEffect(() => {
    async function gerarPatos() {
      console.log(`Gerando ${quantidade} patos`);
      const posicoes = Array.from({ length: quantidade }, gerarPosicaoAleatoria);

      const patosAsync = [];
      for (let i = 0; i < posicoes.length; i++) {
        const pato = await gerarPatoAleatorio(i + 1, posicoes[i]);
        const drone = gerarDroneAleatorio(i + 1);
        patosAsync.push({ pato, drone, pos: posicoes[i] });
      }

      setPatos(patosAsync);
    }

    gerarPatos();
  }, [quantidade]);


  return (
    <>
      {patos.map(({ pato, drone, pos }, index) => (
        <Marker key={index} position={pos} icon={patoIcone}>
          <Popup>
            <InformacaoObtida pato={pato} drone={drone} />
          </Popup>
        </Marker>
      ))}
    </>
  );
}
