import { useState } from "react";
import Questao from "../components/Questao";
import QuestaoModel from "../models/questao";
import RespostaModel from "../models/resposta";
import styles from "../styles/styles.module.scss";

const questaoMock = new QuestaoModel(1, "Enunciado", [
  RespostaModel.certa("Certa"),
  RespostaModel.errada("Errada 1"),
  RespostaModel.errada("Errada 2"),
  RespostaModel.errada("Errada 3"),
]);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice));
  }

  function tempoEsgotado() {
    console.log("Tempo esgotado :(");
  }

  return (
    <div className={styles.home}>
      <Questao
        questao={questao}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      />
    </div>
  );
}
