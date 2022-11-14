import QuestaoModel from "../../models/questao";
import Enunciado from "../Enunciado";
import Resposta from "../Resposta";
import Temporizador from "../Temporizador";
import styles from "./styles.module.scss";

interface Props {
  questao: QuestaoModel;
  respostaFornecida: (indice: number) => void;
  tempoEsgotado: () => void;
}

const letras = [
  { valor: "A", cor: "#f2c866" },
  { valor: "B", cor: "#f266ba" },
  { valor: "C", cor: "#85d4f2" },
  { valor: "D", cor: "#bce596" },
];

export default function Questao({ questao, respostaFornecida, tempoEsgotado }: Props) {
  function renderRespostas() {
    return questao.respostas.map((resp, i) => (
      <Resposta
        key={i}
        resposta={resp}
        indice={i}
        letra={letras[i].valor}
        corFundo={letras[i].cor}
        respostaFornecida={respostaFornecida}
      />
    ));
  }

  return (
    <div className={styles.questao}>
      <Enunciado enunciado={questao.enunciado} />
      <Temporizador duracao={10} tempoEsgotado={tempoEsgotado} />
      {renderRespostas()}
    </div>
  );
}
