import { obterLocalizacaoAPI } from "./obterLocalizacao";
import { regioesReferencia } from "./pontosReferencia";
import { poderes } from "./poderes";

function aleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const statusPossiveis = ["Desperto", "Em transe", "Hibernação profunda"];

function gerarSuperPoder() {
  return poderes[Math.floor(Math.random() * poderes.length)];
}
// Função que verifica se a posição está dentro de alguma região
function verificarPontoReferencia(lat, lon) {
  for (const regiao of regioesReferencia) {
    if (
      lat >= regiao.latMin &&
      lat <= regiao.latMax &&
      lon >= regiao.lonMin &&
      lon <= regiao.lonMax
    ) {
      return regiao.nome;
    }
  }
  return null;
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

  // Busca cidade, estado e país via API Nominatim
  const localizacaoExtra = await obterLocalizacaoAPI(posicao[0], posicao[1]);

  // Verifica ponto de referência
  const pontoReferencia = verificarPontoReferencia(posicao[0], posicao[1]);

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
      pontoReferencia,
      cidade: localizacaoExtra.cidade,
      estado: localizacaoExtra.estado,
      pais: localizacaoExtra.pais
    }
  };
}
