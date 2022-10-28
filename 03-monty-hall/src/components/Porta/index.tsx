import PortaModel from "../../model/PortaModel";
import styles from "./styles.module.scss";

interface Props {
  porta: PortaModel;
}

export default function Porta({ porta }: Props) {
  const selecao = porta.isSelecionada ? styles.selecao : "";

  return (
    <div className={styles.area}>
      <div className={`${styles.batente} ${selecao}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
