import React, { useRef, useImperativeHandle, forwardRef, useState, useEffect } from "react";
import "./PainelLateral.css";
import ModalMissao from "../modalMissao/modalMissao";

const PainelLateral = forwardRef(({ aberto, onFechar, children }, ref) => {
  const painelRef = useRef(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [mapElement, setMapElement] = useState(null);

  const [missoes, setMissoes] = useState({});
  const patoId = children?.props?.pato?.id || "sem-id";
  const statusAtual = missoes[patoId] || "nao_iniciada";

  useEffect(() => {
    const mapContainer = document.querySelector(".leaflet-container");
    if (mapContainer) setMapElement(mapContainer);

    function bloquearZoom(e) {
      if (mapContainer && painelRef.current?.matches(":hover")) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    if (mapContainer) {
      mapContainer.addEventListener("wheel", bloquearZoom, { passive: false });
    }

    return () => {
      if (mapContainer) {
        mapContainer.removeEventListener("wheel", bloquearZoom);
      }
    };
  }, []);

  function bloquearEventos(e) {
    e.stopPropagation();
  }

  useImperativeHandle(ref, () => ({
    scrollToBottom: () => {
      if (painelRef.current) {
        painelRef.current.scrollTo({
          top: painelRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    },
    contains: (target) => painelRef.current?.contains(target),
  }));

  const iniciarMissao = () => {
    if (["ganhou", "perdeu", "abandonou"].includes(statusAtual)) {
      alert(`Missão já concluída para este pato (${statusAtual.toUpperCase()}).`);
      return;
    }

    setModalAberto(true);
    setMissoes((prev) => ({ ...prev, [patoId]: "em_andamento" }));
  };

  const finalizarMissao = (resultado) => {
    setModalAberto(false);
    setMissoes((prev) => ({ ...prev, [patoId]: resultado }));
  };

  return (
    <div
      className={`painel-lateral ${aberto ? "aberto" : ""}`}
      onMouseDown={bloquearEventos}
      onMouseMove={bloquearEventos}
      ref={painelRef}
    >
      {aberto && (
        <>
          <button className="botao-fechar" onClick={onFechar}>
            X
          </button>

          {children}

          <div className="status-missao">
            <p>Status da Missão:</p>
            <span className={statusAtual}>{statusAtual.replace("_", " ")}</span>
          </div>

          <div className="centralizar-botao">
            <button
              className="iniciar-missao-btn"
              onClick={iniciarMissao}
              disabled={["ganhou", "perdeu", "abandonou"].includes(statusAtual)}
            >
              Iniciar Missão
            </button>
          </div>
        </>
      )}

      <ModalMissao
        aberto={modalAberto}
        onFechar={() => finalizarMissao("abandonou")}
        pato={children?.props?.pato}
        drone={children?.props?.drone}
        onFinalizar={finalizarMissao}
      />
    </div>
  );
});

export default PainelLateral;
