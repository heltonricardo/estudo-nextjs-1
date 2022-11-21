import router from "next/router";
import { useEffect, useState } from "react";
import Questionario from "../components/Questionario";
import BASE_URL from "../constants/envs";
import QuestaoModel from "../models/questao";

export default function Home() {
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [qntAcertadas, setQntAcertadas] = useState<number>(0);
  const [idsQuestoes, setIdsQuestoes] = useState<number[]>([]);
  const [indiceQuestao, setIndiceQuestao] = useState<number>(0);

  useEffect(() => {
    carregarIdsQuestoes();
  }, []);

  useEffect(() => {
    idsQuestoes.length && carregarQuestao(idsQuestoes[indiceQuestao]);
  }, [idsQuestoes]);

  useEffect(() => {
    if (idsQuestoes.length) {
      idsQuestoes[indiceQuestao] ? irParaProximaPergunta() : finalizar();
    }
  }, [indiceQuestao]);

  function carregarIdsQuestoes() {
    fetch(`${BASE_URL}/questionario`)
      .then((resp) => resp.json())
      .then(setIdsQuestoes);
  }

  function carregarQuestao(id: number) {
    fetch(`${BASE_URL}/questoes/${id}`)
      .then((resp) => resp.json())
      .then(QuestaoModel.paraEntidade)
      .then(setQuestao);
  }

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.isAcertada;
    acertou && setQntAcertadas(qntAcertadas + 1);
  }

  function irParaProximaPergunta() {
    carregarQuestao(idsQuestoes[indiceQuestao]);
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: { total: idsQuestoes.length, acertadas: qntAcertadas },
    });
  }

  return (
    questao && (
      <Questionario
        questao={questao}
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={() => setIndiceQuestao(indiceQuestao + 1)}
        isUltimaQuestao={!idsQuestoes[indiceQuestao + 1]}
      />
    )
  );
}
