import React, { useState, useEffect, useRef } from "react";
import { Marker, useMapEvent } from "react-leaflet";
import L from "leaflet";
import { gerarPatoAleatorio } from "../utils/gerarPatoAleatorio";
import { gerarDroneAleatorio } from "../utils/gerarDrone";
import InformacaoObtida from "./informacaoObtida/InformacaoObtida";
import PainelLateral from "./painelLateral/painelLateral";

const patoIcone = new L.Icon({
  iconUrl: "/images/pato-icon.png",
  iconRetinaUrl: "/images/pato-icon.png",
  iconSize: [30, 30],
  shadowUrl: null,
});

export default function PatosGerados({ basePosicao }) {
  const [patos, setPatos] = useState([]);
  const [patoSelecionado, setPatoSelecionado] = useState(null);
  const [idsConcluidos, setIdsConcluidos] = useState([]); // IDs em memória
  const inicializado = useRef(false);
  const painelRef = useRef(null);
  const raio = 0.05;

  function gerarPosicaoAleatoria() {
    const latitudeAleatoria = (Math.random() * 2 - 1) * raio;
    const longitudeAleatoria = (Math.random() * 2 - 1) * raio;
    return [basePosicao[0] + latitudeAleatoria, basePosicao[1] + longitudeAleatoria];
  }

  const quantidade = useRef(Math.floor(Math.random() * 50) + 1);
  const posicoesFixas = useRef(
    Array.from({ length: quantidade.current }, gerarPosicaoAleatoria)
  );

  useEffect(() => {
    if (inicializado.current) return;
    inicializado.current = true;

    async function gerarPatosGradualmente() {
      const patosTemp = [];
      for (let i = 0; i < quantidade.current; i++) {
        const pato = await gerarPatoAleatorio(i + 1, posicoesFixas.current[i], basePosicao);
        const drone = gerarDroneAleatorio(i + 1);
        patosTemp.push({ pato, drone, pos: posicoesFixas.current[i] });
        setPatos([...patosTemp]);
        await new Promise((r) => setTimeout(r, 100));
      }
    }
    gerarPatosGradualmente();
  }, [basePosicao]);

  // Fechar painel clicando fora
  useMapEvent("click", (e) => {
    const painel = painelRef.current;
    if (!painel || !painel.contains?.(e.originalEvent.target)) {
      setPatoSelecionado(null);
    }
  });

  // Recebe callback de encerramento da missão
  function handleMissaoEncerrada({ patoId }) {
    if (patoId == null) return;
    setIdsConcluidos((prev) => (prev.includes(patoId) ? prev : [...prev, patoId]));
  }

  const patoIdAtual = patoSelecionado?.pato?.id;
  const missaoJaAconteceu = patoIdAtual ? idsConcluidos.includes(patoIdAtual) : false;

  return (
    <div style={{ height: "100%", position: "relative" }}>
      <PainelLateral
        ref={painelRef}
        aberto={!!patoSelecionado}
        onFechar={() => setPatoSelecionado(null)}
        missaoBloqueada={missaoJaAconteceu}
        onMissaoEncerrada={handleMissaoEncerrada}
      >
        {patoSelecionado && (
          <InformacaoObtida
            pato={patoSelecionado.pato}
            drone={patoSelecionado.drone}
          />
        )}
      </PainelLateral>

      {patos.map(({ pato, drone, pos }, index) => (
        <Marker
          key={index}
          position={pos}
          icon={patoIcone}
          eventHandlers={{
            click: () => setPatoSelecionado({ pato, drone }),
          }}
        />
      ))}
    </div>
  );
}
