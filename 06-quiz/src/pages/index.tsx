import router from "next/router";
import { useEffect, useState } from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../models/questao";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [idsQuestoes, setIdsQuestoes] = useState<number[]>([]);
  const [qntAcertadas, setQntAcertadas] = useState<number>(0);
  const [indiceQuestao, setIndiceQuestao] = useState<number>(0);

  function carregarIdsQuestoes() {
    fetch(`${BASE_URL}/questionario`)
      .then((resp) => resp.json())
      .then(setIdsQuestoes);
  }

  async function carregarQuestao(id: number) {
    const questaoEntidade = await fetch(`${BASE_URL}/questoes/${id}`)
      .then((resp) => resp.json())
      .then(QuestaoModel.paraEntidade);
    questaoEntidade && setQuestao(questaoEntidade);
  }

  useEffect(() => {
    carregarIdsQuestoes();
  }, []);

  useEffect(() => {
    idsQuestoes.length && carregarQuestao(idsQuestoes[indiceQuestao]);
  }, [idsQuestoes]);

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.isAcertada;
    acertou && setQntAcertadas(qntAcertadas + 1);
  }

  function gerarIdProximaQuestao() {
    setIndiceQuestao(indiceQuestao + 1);
  }

  function irParaProximaQuestao() {
    carregarQuestao(idsQuestoes[indiceQuestao]);
  }

  function irParaProximoPasso() {
    gerarIdProximaQuestao();
    idsQuestoes[indiceQuestao] ? irParaProximaQuestao() : finalizar();
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsQuestoes.length,
        acertadas: qntAcertadas,
      },
    });
  }

  return (
    questao && (
      <Questionario
        questao={questao}
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={irParaProximoPasso}
        isUltimaQuestao={!idsQuestoes[indiceQuestao]}
      />
    )
  );
}
