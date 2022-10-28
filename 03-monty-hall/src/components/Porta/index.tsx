import PortaModel from "../../model/PortaModel";
import styles from "./styles.module.scss";

interface Props {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

export default function Porta({ value: porta, onChange: evento }: Props) {
  const selecao = porta.isSelecionada ? styles.selecao : "";

  return (
    <div className={styles.area} onClick={() => evento(porta.alternarSelecao())}>
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
