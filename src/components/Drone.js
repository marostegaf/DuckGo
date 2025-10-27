import { gerarDroneAleatorio } from "../utils/gerarDrone";

export default function Drone({ id }) {
  const drone = gerarDroneAleatorio(id);
  return drone;
}
