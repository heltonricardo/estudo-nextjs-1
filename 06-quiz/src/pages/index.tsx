import Questao from "../components/Questao";
import QuestaoModel from "../models/questao";
import RespostaModel from "../models/resposta";
import styles from "../styles/styles.module.scss";

export default function Home() {
  const questao = new QuestaoModel(1, "Enunciado", [
    RespostaModel.certa("Certa"),
    RespostaModel.errada("Errada 1"),
    RespostaModel.errada("Errada 2"),
    RespostaModel.errada("Errada 3"),
  ]);

  return (
    <div className={styles.home}>
      <Questao questao={questao} />
    </div>
  );
}
