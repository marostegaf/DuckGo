// src/utils/avaliarCaptura.js
export function avaliarCaptura(pato) {
  let pontos = 0;
  const explicacao = [];

  // --- MUTAÇÕES ---
  if (pato.mutacoes <= 2) {
    pontos += 1;
    explicacao.push(`Mutações baixas (${pato.mutacoes}) → +1 ponto.`);
  } else if (pato.mutacoes <= 4) {
    pontos += 2;
    explicacao.push(`Mutações moderadas (${pato.mutacoes}) → +2 pontos.`);
  } else {
    pontos += 3;
    explicacao.push(`Mutações altas (${pato.mutacoes}) → +3 pontos.`);
  }

  // --- PESO ---
  if (pato.pesoG <= 2000) {
    pontos += 3;
    explicacao.push(`Peso baixo (${pato.pesoG} g) → +3 pontos.`);
  } else if (pato.pesoG <= 4000) {
    pontos += 2;
    explicacao.push(`Peso médio (${pato.pesoG} g) → +2 pontos.`);
  } else {
    pontos += 1;
    explicacao.push(`Peso alto (${pato.pesoG} g) → +1 ponto.`);
  }

  // --- DISTÂNCIA ---
  const distanciaKm = pato.localizacao?.distanciaBaseKm || 0;
  if (distanciaKm <= 5000) {
    pontos += 3;
    explicacao.push(`Distância curta (${distanciaKm.toFixed(2)} km) → +3 pontos.`);
  } else {
    pontos += 1;
    explicacao.push(`Distância longa (${distanciaKm.toFixed(2)} km) → +1 ponto.`);
  }

  // --- STATUS E BATIMENTOS ---
  if (pato.status === "Hibernação profunda") {
    pontos += 3;
    explicacao.push("Pato em hibernação profunda → +3 pontos (captura segura).");
  } else if (pato.status === "Em transe") {
    if (pato.batimentosCardiacos <= 70) {
      pontos += 2;
      explicacao.push(`Pato em transe com batimentos baixos (${pato.batimentosCardiacos} bpm) → +2 pontos.`);
    } else {
      pontos += 0;
      explicacao.push(`Pato em transe com batimentos altos (${pato.batimentosCardiacos} bpm) → +0 pontos (risco de despertar).`);
    }
  } else if (pato.status === "Desperto") {
    if (!pato.superPoder) {
      pontos += 1;
      explicacao.push("Pato desperto sem superpoder → +1 ponto.");
    } else {
      // Avaliação de pontos baseado na classificação do poder
      let pontosPoder = 0;
      const classificacao = pato.superPoder.classificacao?.toLowerCase() || "comum";

      switch (classificacao) {
        case "bélico":
          pontosPoder = 1;
          explicacao.push(`Pato com poder bélico (${pato.superPoder.nome}) → +1 ponto.`);
          break;
        case "raro":
          pontosPoder = 2;
          explicacao.push(`Pato com poder raro (${pato.superPoder.nome}) → +2 pontos.`);
          break;
        case "alto risco":
          pontosPoder = 0;
          explicacao.push(`Pato com poder de alto risco (${pato.superPoder.nome}) → +0 pontos (perigoso).`);
          break;
        case "lendário":
          pontosPoder = 3;
          explicacao.push(`Pato com poder lendário (${pato.superPoder.nome}) → +3 pontos.`);
          break;
        default:
          pontosPoder = 1;
          explicacao.push(`Pato com poder (${pato.superPoder.nome}) → +1 ponto.`);
      }

      pontos += pontosPoder;
    }
  }

  // --- CONCLUSÃO ---
  let recomendacao = "";
  if (pontos >= 8) {
    recomendacao = "CAPTURAR: SIM";
  } else if (pontos >= 5) {
    recomendacao = "CAPTURAR: COM CAUTELA";
  } else {
    recomendacao = "CAPTURAR: NÃO";
  }

  return { pontos, recomendacao, explicacao };
}
