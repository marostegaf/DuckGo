import React, { useState, useEffect, useRef } from "react";
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
  const [patos, setPatos] = useState([]);
  const inicializado = useRef(false);
  const raio = 0.05;

  // Gera posição aleatória dentro do raio
  function gerarPosicaoAleatoria() {
    const latitudeAleatoria = (Math.random() * 2 - 1) * raio;
    const longitudeAleatoria = (Math.random() * 2 - 1) * raio;
    return [basePosicao[0] + latitudeAleatoria, basePosicao[1] + longitudeAleatoria];
  }

  // Quantidade total de patos a serem gerados
  const quantidade = useRef(Math.floor(Math.random() * 50) + 1);

  // Posições fixas geradas aleatoriamente
  const posicoesFixas = useRef(
    Array.from({ length: quantidade.current }, gerarPosicaoAleatoria)
  );

  useEffect(() => {
    if (inicializado.current) return;
    inicializado.current = true;

    // Log da quantidade total antes de começar
    console.log(`Quantidade de Patos Primordiais: ${quantidade.current}`);

    async function gerarPatosGradualmente() {
      const patosTemp = [];

      for (let i = 0; i < quantidade.current; i++) {
        const pato = await gerarPatoAleatorio(i + 1, posicoesFixas.current[i]);
        const drone = gerarDroneAleatorio(i + 1);

        patosTemp.push({ pato, drone, pos: posicoesFixas.current[i] });
        setPatos([...patosTemp]);

        console.log(
          `[${i + 1}/${quantidade.current}] Pato ${pato.nome} gerado: lat:${posicoesFixas.current[i][0].toFixed(
            5
          )}, lon:${posicoesFixas.current[i][1].toFixed(5)}, Ponto de referência: ${pato.localizacao.pontoReferencia || "Nenhum"}`
        );

        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    gerarPatosGradualmente();
  }, [basePosicao]);

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
