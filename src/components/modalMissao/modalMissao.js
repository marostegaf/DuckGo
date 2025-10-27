import React, { useEffect, useState } from "react";
import "./modalMissao.css";

export default function ModalMissao({ aberto, onFechar, pato, drone }) {
  const [bateria, setBateria] = useState(100);
  const [combustivel, setCombustivel] = useState(100);
  const [integridade, setIntegridade] = useState(100);

  const [mensagem, setMensagem] = useState("");
  const [missaoFinalizada, setMissaoFinalizada] = useState(false);

  const [chanceExtra, setChanceExtra] = useState(0);
  const [chanceBase, setChanceBase] = useState(0);
  const [defesasUsadas, setDefesasUsadas] = useState(0);

  const [ultimoNumero, setUltimoNumero] = useState(null);
  const [ultimaChance, setUltimaChance] = useState(null);

  const [capturado, setCapturado] = useState(false);
  const [encerradaPorBateria, setEncerradaPorBateria] = useState(false);

  function calcularChanceBase(p) {
    if (!p) return 0;

    const status = p.status;

    if (status === "Hibernação profunda") return 90;

    if (status === "Em transe") {
      const bpm = p.batimentosCardiacos || 0;
      const bpmMin = 40;
      const bpmMax = 150;
      const ratio = Math.min(Math.max((bpm - bpmMin) / (bpmMax - bpmMin), 0), 1);
      return Math.round(80 - 50 * ratio); // 80 → 30
    }

    if (status === "Desperto") {
      const c = p.superPoder?.classificacao || "Bélico";
      switch (c) {
        case "Alto risco": return 5;
        case "Lendário":  return 10;
        case "Raro":      return 15;
        case "Bélico":
        default:          return 20;
      }
    }

    return 0;
  }

  // Reset ao abrir
  useEffect(() => {
    if (aberto && pato && drone) {
      setBateria(100);
      setIntegridade(100);
      setMensagem("");
      setMissaoFinalizada(false);
      setChanceExtra(0);
      setDefesasUsadas(0);
      setUltimoNumero(null);
      setUltimaChance(null);
      setCapturado(false);
      setEncerradaPorBateria(false);

      const base = calcularChanceBase(pato);
      setChanceBase(base);

      const combustivelInicial = Math.floor(Math.random() * 81) + 10;
      setCombustivel(combustivelInicial);

      const distancia = pato.localizacao?.distanciaBaseKm || 0;
      setMensagem(
        `O drone chegou ao local (${distancia.toFixed(
          2
        )} km). Combustível disponível: ${combustivelInicial}%.`
      );
    }
  }, [aberto, pato, drone]);

  // Destruição do drone
  useEffect(() => {
    if (integridade <= 0 && !missaoFinalizada) {
      setIntegridade(0);
      setMensagem("O drone foi destruído durante a missão.");
      setCapturado(false);
      setMissaoFinalizada(true);
    }
  }, [integridade, missaoFinalizada]);

  if (!aberto || !pato || !drone) return null;

  const poder = pato.superPoder || {
    nome: "Desconhecido",
    descricao: "Nenhuma habilidade detectada.",
    classificacao: "N/A",
    defesa: "Nenhuma defesa identificada.",
  };

  // Ativar Defesa
  function ativarDefesa() {
    if (missaoFinalizada || integridade <= 0) return;
    if (defesasUsadas >= 4) {
      setMensagem("Capacidade de defesa máxima atingida (4 utilizações).");
      return;
    }

    const novaChanceExtra = Math.min(chanceExtra + 5, 20);

    const consumo = Math.floor(Math.random() * 75) + 1;

    setBateria((b) => {
      const novaBateria = Math.max(b - consumo, 0);

      if (novaBateria <= 0) {
        setMensagem(`Bateria esgotada ao ativar a defesa (-${consumo}%). Missão encerrada.`);
        setEncerradaPorBateria(true);
        setCapturado(false);
        setMissaoFinalizada(true);
      } else {
        setChanceExtra(novaChanceExtra);
        setDefesasUsadas(defesasUsadas + 1);
        setMensagem(
          `Defesa ativada (${poder.defesa}). Bateria -${consumo}% | Chance total agora: ${
            Math.min(chanceBase + novaChanceExtra, 100)
          }%.`
        );
      }

      return novaBateria;
    });
  }

  // Tentar Capturar
  function tentarCapturar() {
    if (missaoFinalizada) return;

    if (bateria <= 0) {
      setMensagem("O drone não pode continuar a missão (bateria esgotada).");
      setEncerradaPorBateria(true);
      setCapturado(false);
      setMissaoFinalizada(true);
      return;
    }

    if (integridade <= 0) {
      setMensagem("O drone foi destruído durante a missão.");
      setCapturado(false);
      setMissaoFinalizada(true);
      return;
    }

    const chanceTotal = Math.min(100, chanceBase + chanceExtra);
    const numeroSorteado = Math.random() * 100;

    setUltimoNumero(numeroSorteado.toFixed(1));
    setUltimaChance(chanceTotal.toFixed(1));

    console.log(
      `[DEBUG] Tentativa de captura → Chance: ${chanceTotal.toFixed(
        1
      )}%, Número sorteado: ${numeroSorteado.toFixed(1)}`
    );

    // Simula o "roll visual" de combustível, mas não altera valor
    const rollVisual = Math.floor(Math.random() * 81) + 10;
    console.log(`[DEBUG] Valor de combustível simulado (10–90): ${rollVisual}%`);

    const sucesso = numeroSorteado < chanceTotal;

    if (sucesso) {
      setMensagem(
        `Missão bem-sucedida! ${pato.nome} capturado (Chance: ${chanceTotal.toFixed(
          1
        )}%, Número: ${numeroSorteado.toFixed(1)}).`
      );
      setCapturado(true);
      setMissaoFinalizada(true);
      return;
    }

    const novaIntegridade = Math.max(integridade - 25, 0);
    setIntegridade(novaIntegridade);

    if (novaIntegridade <= 0) {
      setMensagem(
        `Falha na missão. O drone foi destruído (Chance: ${chanceTotal.toFixed(
          1
        )}%, Número: ${numeroSorteado.toFixed(1)}).`
      );
      setCapturado(false);
      setMissaoFinalizada(true);
      return;
    }

    setMensagem(
      `Tentativa falhou (Chance: ${chanceTotal.toFixed(
        1
      )}%, Número: ${numeroSorteado.toFixed(
        1
      )}). O pato resistiu. Integridade -25%.`
    );
  }

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        <button className="modal-fechar" onClick={onFechar}>✕</button>

        <div className="modal-topo">
          <h2>Missão de Captura — {pato.nome}</h2>
          <p><strong>Status:</strong> {pato.status}</p>

          {pato.status === "Em transe" && (
            <p>
              <strong>Batimentos:</strong> {pato.batimentosCardiacos} bpm —{" "}
              <strong>Chance Atual:</strong> {chanceBase}%
            </p>
          )}
          {pato.status === "Hibernação profunda" && (
            <p><strong>Chance Atual:</strong> {chanceBase}% (hibernação profunda)</p>
          )}
          {pato.status === "Desperto" && (
            <p>
              <strong>Poder:</strong> {poder.classificacao} —{" "}
              <strong>Chance Atual:</strong> {chanceBase}%
            </p>
          )}

          <p><strong>Mutações:</strong> {pato.mutacoes}</p>
          <p>
            <strong>Altura:</strong> {Math.round(pato.alturaCm)} cm |{" "}
            <strong>Peso:</strong> {Math.round(pato.pesoG)} g
          </p>
          <p>
            <strong>Localização:</strong> {pato.localizacao.cidade},{" "}
            {pato.localizacao.estado} ({pato.localizacao.pais})
          </p>
          <p>
            <strong>Distância da Base:</strong>{" "}
            {pato.localizacao.distanciaBaseKm.toFixed(2)} km
          </p>
        </div>

        <hr />

        <div className="modal-poder">
          <h3>Superpoder Detectado</h3>
          <p><strong>{poder.nome}</strong> — {poder.descricao}</p>
          <p><strong>Classificação:</strong> {poder.classificacao}</p>
          <p><strong>Defesa associada:</strong> {poder.defesa}</p>
        </div>

        <hr />

        <div className="status-drone">
          <h3>Status do Drone</h3>
          <ul>
            <li>Combustível: {combustivel}%</li>
            <li>Bateria: {bateria}%</li>
            <li>Integridade: {integridade}%</li>
            <li>Chance Base: {chanceBase}%</li>
            <li>Chance Total: {Math.min(chanceBase + chanceExtra, 100)}%</li>
            <li>Defesas usadas: {defesasUsadas}/4</li>
          </ul>
        </div>

        <div className="gif-batalha">
          <img src="/images/batalha-drone.gif" alt="Batalha em andamento" />
        </div>

        {mensagem && (
          <div className="mensagem-batalha">
            <p>{mensagem}</p>
          </div>
        )}

        <hr />

        {!missaoFinalizada ? (
          <div className="acoes-container">
            <button className="btn-acao" onClick={ativarDefesa}>Ativar Defesa</button>
            <button className="btn-acao" onClick={tentarCapturar}>Tentar Capturar</button>
          </div>
        ) : (
          <div className="finalizacao">
            <h3>{capturado ? "Missão Concluída" : "Falha na Missão"}</h3>
            <p>
              {capturado
                ? "Pato capturado com sucesso. Drone retornando à base."
                : encerradaPorBateria
                  ? "Bateria esgotada. Sem tentativa final de captura."
                  : "Drone destruído. Missão encerrada."}
            </p>

            {capturado || (!encerradaPorBateria && ultimoNumero && ultimaChance) ? (
              <p className="resultado-final">
                <strong>Chance final:</strong> {ultimaChance ?? "-"}% {" | "}
                <strong>Número sorteado:</strong> {ultimoNumero ?? "-"}
              </p>
            ) : (
              <p className="resultado-final">
                <strong>Sem tentativa final</strong> (número não gerado).
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
