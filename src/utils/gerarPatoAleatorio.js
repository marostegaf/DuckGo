import { obterLocalizacaoAPI } from "./obterLocalizacao";

function aleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const statusPossiveis = ["Desperto", "Em transe", "Hibernação profunda"];

function gerarSuperPoder() {
  const poderes = [
    { nome: "Tempestade Elétrica", descricao: "Gera descargas elétricas em área", classificacao: "Bélico" },
    { nome: "Olhos Laser", descricao: "Dispara lasers pelos olhos", classificacao: "Raro" },
    { nome: "Manipulação da Água", descricao: "Controla corpos d'água próximos", classificacao: "Alto risco" }
  ];
  return poderes[Math.floor(Math.random() * poderes.length)];
}

export async function gerarPatoAleatorio(id, posicao) {
  const alturaCm = aleatorioEntre(10, 1000);
  const pesoG = aleatorioEntre(100, 5000);
  const status = statusPossiveis[Math.floor(Math.random() * statusPossiveis.length)];
  const mutacoes = aleatorioEntre(0, 5);
  const batimentosCardiacos = (status === "Em transe" || status === "Hibernação profunda") 
    ? aleatorioEntre(30, 150) 
    : null;
  const superPoder = status === "Desperto" ? gerarSuperPoder() : null;

  // Busca cidade, estado e país via API Nominatim (uma única tentativa, rápida)
  const localizacaoExtra = await obterLocalizacaoAPI(posicao[0], posicao[1]);

  return {
    id,
    nome: `Pato Primordial ${id}`,
    alturaCm,
    pesoG,
    mutacoes,
    status,
    batimentosCardiacos,
    superPoder,
    localizacao: {
      latitude: posicao[0],
      longitude: posicao[1],
      pontoReferencia: null,
      cidade: localizacaoExtra.cidade,
      estado: localizacaoExtra.estado,
      pais: localizacaoExtra.pais
    }
  };
}
