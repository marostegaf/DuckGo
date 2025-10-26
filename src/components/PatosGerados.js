import Pato from "./Pato";

export default function PatosGerados({ basePosicao }) {
  const quantidade = Math.floor(Math.random() * 7) + 1;
  console.log(`Quantidade de patos gerados: ${quantidade}`);

  const raio = 0.05;

  function gerarPosicaoAleatoria() {
    const latitudeAleatoria = (Math.random() * 2 - 1) * raio;
    const longitudeAleatoria = (Math.random() * 2 - 1) * raio;
    return [basePosicao[0] + latitudeAleatoria, basePosicao[1] + longitudeAleatoria];
  }

  const posicoes = Array.from({ length: quantidade }, gerarPosicaoAleatoria);

  return (
    <>
      {posicoes.map((pos, index) => (
        <Pato key={index} posicao={pos} />
      ))}
    </>
  );
}
