// utils/obterLocalizacao.js
export async function obterLocalizacaoAPI(lat, lon, tentativas = 3) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

  for (let i = 0; i < tentativas; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Resposta HTTP ${res.status}`);
      const data = await res.json();

      return {
        cidade: data.address.city || data.address.town || data.address.village || "Desconhecida",
        estado: data.address.state || "Desconhecido",
        pais: data.address.country || "Desconhecido"
      };
    } catch (error) {
      console.warn(`Tentativa ${i + 1} falhou para lat:${lat}, lon:${lon}`, error);
      await new Promise(resolve => setTimeout(resolve, 500)); // espera 500ms antes de tentar de novo
    }
  }

  console.error(`Não foi possível obter localização para lat:${lat}, lon:${lon}`);
  return { cidade: "Desconhecida", estado: "Desconhecido", pais: "Desconhecido" };
}
