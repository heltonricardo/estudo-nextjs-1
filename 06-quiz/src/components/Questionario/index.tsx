import QuestaoModel from "../../models/questao";
import Botao from "../Botao";
import Questao from "../Questao";
import styles from "./styles.module.scss";

interface Props {
  questao: QuestaoModel;
  isUltimaQuestao: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irParaProximoPasso: () => void;
}

export default function Questionario(props: Props) {
  function respostaFornecida(indice: number) {
    if (props.questao.isNaoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice));
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao && (
        <Questao
          tempoParaResponder={10}
          questao={props.questao}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={props.irParaProximoPasso}
        />
      )}
      <Botao onClick={props.irParaProximoPasso}>
        {props.isUltimaQuestao ? "Finalizar" : "Próxima"}
      </Botao>
    </div>
  );
}
