import React from "react";

export default function InformacaoObtida({ pato, drone }) {
  // Altura e peso convertidos se drone for dos EUA
  const alturaConvertida = drone.paisDrone === "EUA" ? pato.alturaCm * 30.48 : pato.alturaCm;
  const pesoConvertido = drone.paisDrone === "EUA" ? pato.pesoG * 0.453592 : pato.pesoG;

  return (
    <div>
      <h3>{pato.nome}</h3>

      <p>
        Altura: {Math.round(alturaConvertida)} cm
        {drone.paisDrone === "EUA" && ` (${pato.alturaCm.toFixed(2)} pés)`}
      </p>

      <p>
        Peso: {Math.round(pesoConvertido)} g
        {drone.paisDrone === "EUA" && ` (${pato.pesoG.toFixed(2)} lbs)`}
      </p>

      <p>Status: {pato.status}</p>
      {pato.batimentosCardiacos && <p>Batimentos cardíacos: {pato.batimentosCardiacos} bpm</p>}
      <p>Mutações: {pato.mutacoes}</p>

      {pato.superPoder && (
        <>
          <p>Superpoder: {pato.superPoder.nome}</p>
          <p>Descrição: {pato.superPoder.descricao}</p>
          <p>Classificação: {pato.superPoder.classificacao}</p>
        </>
      )}

      <hr />
      <h4>Localização do Pato</h4>
      <p>Cidade: {pato.localizacao.cidade}</p>
      <p>Estado: {pato.localizacao.estado}</p>
      <p>País: {pato.localizacao.pais}</p>
      <p>Latitude: {pato.localizacao.latitude.toFixed(5)}</p>
      <p>Longitude: {pato.localizacao.longitude.toFixed(5)}</p>
      {pato.localizacao.pontoReferencia && <p>Ponto de referência: {pato.localizacao.pontoReferencia}</p>}

      <hr />
      <h4>Informações do Drone</h4>
      <p>ID: {drone.id}</p>
      <p>Marca: {drone.marcaDrone}</p>
      <p>Fabricante: {drone.fabricanteDrone}</p>
      <p>País de origem: {drone.paisDrone}</p>
      <p>
        Precisão GPS: {Math.round(drone.precisaoCm)} cm
        {drone.paisDrone === "EUA" && ` (${drone.precisaoOriginal.toFixed(2)} jardas)`}
      </p>
    </div>
  );
}
