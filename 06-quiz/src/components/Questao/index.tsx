import QuestaoModel from "../../models/questao";
import styles from "./styles.module.scss";

interface Props {
  questao: QuestaoModel;
}

export default function Questao({ questao }: Props) {
  return (
    <div className={styles.questao}>
      <h1>Questao</h1>
    </div>
  );
}
