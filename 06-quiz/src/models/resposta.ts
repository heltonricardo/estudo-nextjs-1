export default class RespostaModel {
  #valor: string;
  #isCorreta: boolean;
  #isRevelada: boolean;

  constructor(valor: string, isCorreta: boolean, isRevelada = false) {
    this.#valor = valor;
    this.#isCorreta = isCorreta;
    this.#isRevelada = isRevelada;
  }

  get valor() {
    return this.#valor;
  }

  get isCorreta() {
    return this.#isCorreta;
  }

  get isRevelada() {
    return this.#isRevelada;
  }
}
