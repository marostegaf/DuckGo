function aleatorioEntre(min, max) {
  return Math.random() * (max - min) + min; // número decimal
}

const marcasDrones = ["AlienTech", "SkyWatch", "StarDrone"];
const fabricantes = ["Galactic Corp", "Orion Industries", "NovaTech"];
const paisesDrones = ["EUA", "Brasil"];

export function gerarDroneAleatorio(id) {
  const marca = marcasDrones[Math.floor(Math.random() * marcasDrones.length)];
  const fabricante = fabricantes[Math.floor(Math.random() * fabricantes.length)];
  const pais = paisesDrones[Math.floor(Math.random() * paisesDrones.length)];

  // Precisão de 4 cm a 30 m
  let minPrecisao, maxPrecisao;
  if (pais === "Brasil") {
    minPrecisao = 4;       // cm
    maxPrecisao = 3000;    // 30m em cm
  } else { // EUA, informação em jardas
    minPrecisao = 4 / 0.9144;    // cm -> jardas
    maxPrecisao = 3000 / 0.9144; // cm -> jardas
  }

  const precisaoOriginal = aleatorioEntre(minPrecisao, maxPrecisao);
  const precisaoCm = pais === "EUA" ? precisaoOriginal * 0.9144 : precisaoOriginal;

  return {
    id: `DRN-${String(id).padStart(3, "0")}`,
    marcaDrone: marca,
    fabricanteDrone: fabricante,
    paisDrone: pais,
    precisaoOriginal, // valor na unidade do país
    precisaoCm        // valor convertido para cm
  };
}
