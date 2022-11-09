import RespostaModel from "./resposta";

export default class QuestaoModel {
  #id: number;
  #enunciado: string;
  #respostas: RespostaModel[];
  #isAcertada: boolean;

  constructor(id: number, enunciado: string, respostas: RespostaModel[], isAcertada = false) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#isAcertada = isAcertada;
  }

  get id() {
    return this.#id;
  }

  get enunciado() {
    return this.#enunciado;
  }

  get respostas() {
    return this.#respostas;
  }

  get isAcertada() {
    return this.#isAcertada;
  }

  get isRespondida() {
    return this.respostas.some((r) => r.isRevelada);
  }
}
