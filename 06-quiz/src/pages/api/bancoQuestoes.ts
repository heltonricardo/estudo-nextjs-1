import QuestaoModel from "../../models/questao";
import RespostaModel from "../../models/resposta";

const BancoQuestoes = [
  new QuestaoModel(1, "Pergunta 1", [
    RespostaModel.certa("Resposta - Certa"),
    RespostaModel.errada("Resposta - Errada 1"),
    RespostaModel.errada("Resposta - Errada 2"),
    RespostaModel.errada("Resposta - Errada 3"),
  ]),
  new QuestaoModel(2, "Pergunta 2", [
    RespostaModel.certa("Resposta - Certa"),
    RespostaModel.errada("Resposta - Errada 1"),
    RespostaModel.errada("Resposta - Errada 2"),
    RespostaModel.errada("Resposta - Errada 3"),
  ]),
];

export default BancoQuestoes;
