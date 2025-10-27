import React, { useRef, useImperativeHandle, forwardRef, useState, useEffect } from "react";
import "./PainelLateral.css";
import ModalMissao from "../modalMissao/modalMissao";

const PainelLateral = forwardRef(({ aberto, onFechar, children }, ref) => {
  const painelRef = useRef(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [mapElement, setMapElement] = useState(null);

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

  // Impede clique no mapa e rolagem lateral de afetar o mapa
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

          {/* Botão Iniciar Missão */}
          <div className="centralizar-botao">
            <button
              className="iniciar-missao-btn"
              onClick={() => setModalAberto(true)}
            >
              Iniciar Missão
            </button>
          </div>
        </>
      )}

      {/* Modal da Missão */}
      <ModalMissao
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
        pato={children?.props?.pato}
        drone={children?.props?.drone}
      />
    </div>
  );
});

export default PainelLateral;
