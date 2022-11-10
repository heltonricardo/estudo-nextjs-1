import IResposta from "../interfaces/resposta";

export default class RespostaModel {
  #texto: string;
  #isCorreta: boolean;
  #isRevelada: boolean;

  constructor(texto: string, isCorreta: boolean, isRevelada = false) {
    this.#texto = texto;
    this.#isCorreta = isCorreta;
    this.#isRevelada = isRevelada;
  }

  static certa(texto: string) {
    return new RespostaModel(texto, true);
  }

  static errada(texto: string) {
    return new RespostaModel(texto, false);
  }

  get texto() {
    return this.#texto;
  }

  get isCorreta() {
    return this.#isCorreta;
  }

  get isRevelada() {
    return this.#isRevelada;
  }

  paraObjeto(): IResposta {
    return {
      texto: this.texto,
      isCorreta: this.isCorreta,
      isRevelada: this.isRevelada,
    };
  }
}
