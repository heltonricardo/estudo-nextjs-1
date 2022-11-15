import IResposta from "../interfaces/resposta";

export default class RespostaModel {
  #texto: string;
  #correta: boolean;
  #revelada: boolean;

  constructor(texto: string, correta: boolean, revelada = false) {
    this.#texto = texto;
    this.#correta = correta;
    this.#revelada = revelada;
  }

  static paraEntidade(objetoJson: IResposta) {
    const texto = objetoJson.texto;
    const correta = objetoJson.isCorreta;
    const revelada = objetoJson.isRevelada;
    return new RespostaModel(texto, correta, revelada);
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
    return this.#correta;
  }

  get isRevelada() {
    return this.#revelada;
  }

  paraObjeto(): IResposta {
    return {
      texto: this.texto,
      isCorreta: this.isCorreta,
      isRevelada: this.isRevelada,
    };
  }

  revelar() {
    const revelar = true;
    return new RespostaModel(this.texto, this.isCorreta, revelar);
  }
}
