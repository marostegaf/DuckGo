export function gerarPosicaoAleatoria(latMin, latMax, lonMin, lonMax) {
  const latitude = Math.random() * (latMax - latMin) + latMin;
  const longitude = Math.random() * (lonMax - lonMin) + lonMin;

  
  return [latitude, longitude];
}
