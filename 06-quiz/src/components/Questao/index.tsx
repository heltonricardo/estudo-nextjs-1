import QuestaoModel from "../../models/questao";
import Enunciado from "../Enunciado";
import Resposta from "../Resposta";
import styles from "./styles.module.scss";

interface Props {
  questao: QuestaoModel;
}

export default function Questao({ questao }: Props) {
  function renderRespostas() {
    return questao.respostas.map((resp, i) => (
      <Resposta key={i} resposta={resp} indice={i} letra="X" corFundo="#f2c866" />
    ));
  }

  return (
    <div className={styles.questao}>
      <Enunciado enunciado={questao.enunciado} />
      {renderRespostas()}
    </div>
  );
}
