export default function InformacaoObtida({ pato, drone }) {
  // Converte altura e peso se o drone for EUA
  let alturaCm = pato.alturaCm;
  let pesoG = pato.pesoG;

  if (drone.paisDrone === "EUA") {
    alturaCm = pato.alturaCm * 30.48; // pés -> cm
    pesoG = pato.pesoG * 0.453592;   // lbs -> g
  }

  return (
    <div>
      <h3>{pato.nome}</h3>
      <p>Altura: {Math.round(alturaCm)} cm</p>
      <p>Peso: {Math.round(pesoG)} g</p>
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
      <p>Latitude: {pato.localizacao.latitude.toFixed(5)}</p>
      <p>Longitude: {pato.localizacao.longitude.toFixed(5)}</p>
      {pato.localizacao.pontoReferencia && <p>Ponto de referência: {pato.localizacao.pontoReferencia}</p>}
      <hr />
      <h4>Informações do Drone</h4>
      <p>ID: {drone.id}</p>
      <p>Marca: {drone.marcaDrone}</p>
      <p>Fabricante: {drone.fabricanteDrone}</p>
      <p>País de origem: {drone.paisDrone}</p>
      <p>Precisão GPS: {Math.round(drone.precisaoCm)} cm</p>
    </div>
  );
}
