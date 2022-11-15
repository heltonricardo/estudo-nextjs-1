import { embaralharVetor } from "../functions/arrays";
import IQuestao from "../interfaces/questao";
import RespostaModel from "./resposta";

export default class QuestaoModel {
  #id: number;
  #enunciado: string;
  #respostas: RespostaModel[];
  #acertada: boolean;

  static paraEntidade(objetoJson: IQuestao) {
    const id = objetoJson.id;
    const enunciado = objetoJson.enunciado;
    const respostas = objetoJson.respostas.map(RespostaModel.paraEntidade);
    const acertada = objetoJson.isAcertada;
    return new QuestaoModel(id, enunciado, respostas, acertada);
  }

  constructor(id: number, enunciado: string, respostas: RespostaModel[], acertada = false) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#acertada = acertada;
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
    return this.#acertada;
  }

  get isRespondida() {
    return this.respostas.some((r) => r.isRevelada);
  }

  get isNaoRespondida() {
    return !this.isRespondida;
  }

  paraObjeto(): IQuestao {
    return {
      id: this.id,
      enunciado: this.enunciado,
      respostas: this.respostas.map((r) => r.paraObjeto()),
      isAcertada: this.isAcertada,
    };
  }

  embaralharRespostas() {
    const respostasEmbaralhadas = embaralharVetor(this.respostas);
    return new QuestaoModel(this.id, this.enunciado, respostasEmbaralhadas, this.isAcertada);
  }

  responderCom(indice: number) {
    const acertou = this.respostas[indice]?.isCorreta;
    const respostas = this.respostas.map((respAtual, i) => {
      const respSelecionada = i === indice;
      const deveRevelar = respSelecionada; // || respAtual.isCorreta; <- revelar correta também
      return deveRevelar ? respAtual.revelar() : respAtual;
    });
    return new QuestaoModel(this.id, this.enunciado, respostas, acertou);
  }
}
