import RespostaModel from "../../models/resposta";
import styles from "./styles.module.scss";

interface Props {
  resposta: RespostaModel;
  indice: number;
  letra: string;
  corFundo: string;
  respostaFornecida: (indice: number) => void;
}

export default function Resposta(props: Props) {
  const respostaRevelada = props.resposta.isRevelada ? styles.respostaRevelada : "";

  return (
    <div className={styles.resposta} onClick={() => props.respostaFornecida(props.indice)}>
      <div className={`${respostaRevelada} ${styles.conteudo}`}>
        <div className={styles.frente}>
          <span className={styles.letra} style={{ backgroundColor: props.corFundo }}>
            {props.letra}
          </span>
          <span className={styles.texto}>{props.resposta.texto}</span>
        </div>
        <div className={styles.verso}>
          {props.resposta.isCorreta ? (
            <div className={styles.certa}>
              <span className={styles.titulo}>Acertou! 🤩</span>
              <span className={styles.texto}>{props.resposta.texto}</span>
            </div>
          ) : (
            <div className={styles.errada}>
              <span className={styles.titulo}>Errou! 😵‍💫</span>
              <span className={styles.texto}>{props.resposta.texto}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
