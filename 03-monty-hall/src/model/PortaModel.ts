export default class PortaModel {
  #numero: number;
  #temPresente: boolean;
  #isSelecionada: boolean;
  #isAberta: boolean;

  constructor(numero: number, temPresente = false, isSelecionada = false, isAberta = false) {
    this.#numero = numero;
    this.#temPresente = temPresente;
    this.#isSelecionada = isSelecionada;
    this.#isAberta = isAberta;
  }

  get numero() {
    return this.#numero;
  }

  get temPresente() {
    return this.#temPresente;
  }

  get isSelecionada() {
    return this.#isSelecionada;
  }

  get isAberta() {
    return this.#isAberta;
  }

  get isFechada() {
    return !this.isAberta;
  }

  alternarSelecao() {
    const isSelecionada = !this.isSelecionada;
    return new PortaModel(this.numero, this.temPresente, isSelecionada, this.isAberta);
  }

  RemoverSelecao() {
    const isSelecionada = false;
    return new PortaModel(this.numero, this.temPresente, isSelecionada, this.isAberta);
  }

  abrir() {
    const isAberta = true;
    return new PortaModel(this.numero, this.temPresente, this.isSelecionada, isAberta);
  }
}
