import IResposta from "./resposta";

export default interface IQuestao {
  id: number;
  enunciado: string;
  respostas: IResposta[];
  isAcertada: boolean;
}
