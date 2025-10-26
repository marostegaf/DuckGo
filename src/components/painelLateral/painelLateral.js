import React from "react";
import "./PainelLateral.css";

export default function PainelLateral({ aberto, onFechar, children }) {
  // Evita que o Leaflet “pegue” scroll, click ou drag
  function bloquearEventos(e) {
    e.stopPropagation();
  }

  return (
    <div
      className={`painel-lateral ${aberto ? "aberto" : ""}`}
      onMouseDown={bloquearEventos}
      onWheel={bloquearEventos}
      onMouseMove={bloquearEventos}
    >
      {aberto && <button className="botao-fechar" onClick={onFechar}>X</button>}
      {children}
    </div>
  );
}
