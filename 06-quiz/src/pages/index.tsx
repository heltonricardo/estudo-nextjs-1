import { useState } from "react";
import Botao from "../components/Botao";
import Questao from "../components/Questao";
import Questionario from "../components/Questionario";
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

  function questaoRespondida(questao: QuestaoModel) {}

  return (
    <div className={styles.home}>
      <Questionario
        questao={questao}
        isUltimaQuestao
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={() => {}}
      />
    </div>
  );
}
