export async function obterLocalizacaoAPI(lat, lon) {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    const res = await fetch(url);
    const data = await res.json();

    const address = data.address || {};

    return {
      cidade: address.city || address.town || address.village || "Desconhecida",
      estado: address.state || "Desconhecido",
      pais: address.country || "Desconhecido"
    };
  } catch (error) {
    console.error(`Erro ao obter localização: lat:${lat}, lon:${lon}`, error);
    return { cidade: "Desconhecida", estado: "Desconhecido", pais: "Desconhecido" };
  }
}
