export default class Porta {
  #numero;
  #temPresente;
  #isSelecionada;
  #isAberta;

  constructor(numero, temPresente = false, isSelecionada = false, isAberta = false) {
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

  alternarSelecao() {
    const isSelecionada = !this.isSelecionada;
    return new Porta(numero, temPresente, isSelecionada, isAberta);
  }

  RemoverSelecao() {
    const isSelecionada = false;
    return new Porta(numero, temPresente, isSelecionada, isAberta);
  }

  abrir() {
    const isAberta = true;
    return new Porta(numero, temPresente, isSelecionada, isAberta);
  }
}
