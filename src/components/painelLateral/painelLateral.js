// src/components/painelLateral/PainelLateral.js
import React, { useRef, useImperativeHandle, forwardRef } from "react";
import "./PainelLateral.css";

const PainelLateral = forwardRef(({ aberto, onFechar, children }, ref) => {
  const painelRef = useRef(null);

  function bloquearEventos(e) {
    e.stopPropagation();
  }

  // Expõe função scrollToBottom para o componente pai
  useImperativeHandle(ref, () => ({
    scrollToBottom: () => {
      if (painelRef.current) {
        painelRef.current.scrollTo({
          top: painelRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    },
  }));

  return (
    <div
      className={`painel-lateral ${aberto ? "aberto" : ""}`}
      onMouseDown={bloquearEventos}
      onWheel={bloquearEventos}
      onMouseMove={bloquearEventos}
      ref={painelRef}
    >
      {aberto && (
        <button className="botao-fechar" onClick={onFechar}>
          X
        </button>
      )}
      {children}
    </div>
  );
});

export default PainelLateral;
