import RespostaModel from "../../models/resposta";
import styles from "./styles.module.scss";

interface Props {
  resposta: RespostaModel;
  indice: number;
  letra: string;
  corFundo: string;
  respostaFornecida: (indice: number) => void;
}

export default function Resposta({ resposta, indice, letra, corFundo, respostaFornecida }: Props) {
  return (
    <div className={styles.resposta} onClick={() => respostaFornecida(indice)}>
      <div className={styles.conteudo}>
        {resposta.isRevelada ? (
          <div className={styles.verso}>
            {resposta.isCorreta ? (
              <div className={styles.certa}>
                <span className={styles.titulo}>Acertou! 🤩</span>
                <span className={styles.texto}>{resposta.texto}</span>
              </div>
            ) : (
              <div className={styles.errada}>
                <span className={styles.titulo}>Errou! 😵‍💫</span>
                <span className={styles.texto}>{resposta.texto}</span>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.frente}>
            <span className={styles.letra} style={{ backgroundColor: corFundo }}>
              {letra}
            </span>
            <span className={styles.texto}>{resposta.texto}</span>
          </div>
        )}
      </div>
    </div>
  );
}
