import RespostaModel from "../../models/resposta";
import styles from "./styles.module.scss";

interface Props {
  resposta: RespostaModel;
  indice: number;
  letra: string;
  corFundo: string;
}

export default function Resposta({ resposta, letra, corFundo }: Props) {
  return (
    <div className={styles.resposta}>
      <div className={styles.conteudo}>
        <div className={styles.frente}>
          <span className={styles.letra} style={{ backgroundColor: corFundo }}>
            {letra}
          </span>
          <span className={styles.texto}>{resposta.texto}</span>
        </div>
        <div className={styles.verso}></div>
      </div>
    </div>
  );
}
