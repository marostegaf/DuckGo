import { poderes } from "./poderes";

export function avaliarCaptura(pato) {
  let pontos = 0;

  let custoOperacional = 0;
  let risco = 0;
  let valorCientifico = 0;
  let poderioMilitar = 0;

  const explicacao = [];

  if (pato.mutacoes <= 2) {
    valorCientifico += 1;
    explicacao.push(`Mutações baixas (${pato.mutacoes}) → +1 ponto científico.`);
  } else if (pato.mutacoes <= 4) {
    valorCientifico += 2;
    explicacao.push(`Mutações moderadas (${pato.mutacoes}) → +2 pontos científicos.`);
  } else {
    valorCientifico += 3;
    explicacao.push(`Mutações altas (${pato.mutacoes}) → +3 pontos científicos.`);
  }

  if (pato.pesoG <= 2000) {
    custoOperacional += 3;
    explicacao.push(`Peso baixo (${pato.pesoG} g) → +3 pontos de custo operacional.`);
  } else if (pato.pesoG <= 4000) {
    custoOperacional += 2;
    explicacao.push(`Peso médio (${pato.pesoG} g) → +2 pontos de custo operacional.`);
  } else {
    custoOperacional += 1;
    explicacao.push(`Peso alto (${pato.pesoG} g) → +1 ponto de custo operacional.`);
  }

  const distanciaKm = pato.localizacao?.distanciaBaseKm || 0;
  if (distanciaKm <= 5000) {
    custoOperacional += 3;
    explicacao.push(`Distância curta (${distanciaKm.toFixed(2)} km) → +3 pontos de custo operacional.`);
  } else {
    custoOperacional += 1;
    explicacao.push(`Distância longa (${distanciaKm.toFixed(2)} km) → +1 ponto de custo operacional.`);
  }

  if (pato.status === "Hibernação profunda") {
    risco = 3;
    explicacao.push("Pato em hibernação profunda → risco baixo (+3 pontos).");
  } else if (pato.status === "Em transe") {
    if (pato.batimentosCardiacos <= 70) {
      risco = 2;
      explicacao.push(`Pato em transe com batimentos baixos (${pato.batimentosCardiacos} bpm) → risco médio (+2 pontos).`);
    } else {
      risco = 1;
      explicacao.push(`Pato em transe com batimentos altos (${pato.batimentosCardiacos} bpm) → risco alto (+1 ponto).`);
    }
  } else if (pato.status === "Desperto") {
    risco = 0;
    explicacao.push("Pato desperto → risco muito alto (+0 pontos).");
  }

  if (pato.superPoder) {
    const poder = poderes.find(p => p.nome === pato.superPoder.nome);
    if (poder) {
      switch (poder.classificacao) {
        case "Bélico":
          poderioMilitar -= 1;
          explicacao.push(`Poder bélico (${poder.nome}) → -1 ponto de poderio militar.`);
          break;
        case "Raro":
          poderioMilitar += 0;
          explicacao.push(`Poder raro (${poder.nome}) → 0 ponto de poderio militar.`);
          break;
        case "Alto risco":
          poderioMilitar -= 3;
          explicacao.push(`Poder de alto risco (${poder.nome}) → -3 pontos de poderio militar.`);
          break;
        case "Lendário":
          poderioMilitar += 2;
          explicacao.push(`Poder lendário (${poder.nome}) → +1 ponto de poderio militar.`);
          break;
        default:
          poderioMilitar += 0;
          explicacao.push(`Poder (${poder.nome}) desconhecido → 0 ponto de poderio militar.`);
      }
    }
  }

  pontos = custoOperacional + valorCientifico + risco + poderioMilitar;

  let recomendacao = "";

  if ((pato.status === "Hibernação profunda") || (pato.status === "Em transe" && pato.batimentosCardiacos <= 70)) {
    if (pontos >= 7) {
      recomendacao = "CAPTURAR: SIM";
    } else {
      recomendacao = "CAPTURAR: COM CAUTELA";
    }
  } else {
    if (poderioMilitar >= 0 && pontos >= 10) {
      recomendacao = "CAPTURAR: COM CAUTELA";
    } else {
      recomendacao = "CAPTURAR: NÃO";
    }
  }

  return {
    pontos,
    custoOperacional,
    risco,
    valorCientifico,
    poderioMilitar,
    recomendacao,
    explicacao
  };
}
