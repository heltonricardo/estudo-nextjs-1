import { useEffect, useState } from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../models/questao";
import RespostaModel from "../models/resposta";

const questaoMock = new QuestaoModel(1, "Enunciado", [
  RespostaModel.certa("Certa"),
  RespostaModel.errada("Errada 1"),
  RespostaModel.errada("Errada 2"),
  RespostaModel.errada("Errada 3"),
]);

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);
  const [idsQuestoes, setIdsQuestoes] = useState<number[]>([]);

  function carregarIdsQuestoes() {
    fetch(`${BASE_URL}/questionario`)
      .then((resp) => resp.json())
      .then(setIdsQuestoes);
  }

  async function carregarQuestao(id: number) {
    const questaoJson = await fetch(`${BASE_URL}/questoes/${id}`).then((resp) => resp.json());
  }

  useEffect(() => {
    carregarIdsQuestoes();
  }, []);

  useEffect(() => {
    idsQuestoes.length && carregarQuestao(idsQuestoes[0]);
  }, [idsQuestoes]);

  function questaoRespondida(questao: QuestaoModel) {}

  return (
    <Questionario
      questao={questao}
      isUltimaQuestao
      questaoRespondida={questaoRespondida}
      irParaProximoPasso={() => {}}
    />
  );
}
