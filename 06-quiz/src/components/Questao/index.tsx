import QuestaoModel from "../../models/questao";
import Enunciado from "../Enunciado";
import styles from "./styles.module.scss";

interface Props {
  questao: QuestaoModel;
}

export default function Questao({ questao }: Props) {
  return (
    <div className={styles.questao}>
      <Enunciado enunciado={questao.enunciado} />
    </div>
  );
}
