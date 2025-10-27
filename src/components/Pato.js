import { gerarPatoAleatorio } from "../utils/gerarPatoAleatorio";

export default function Pato({ id }) {
  const pato = gerarPatoAleatorio(id);
  return pato;
}
