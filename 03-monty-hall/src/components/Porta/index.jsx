import styles from "./styles.module.scss";

export default function Porta({ selecionada }) {
  const selecao = selecionada ? styles.selecao : "";
  
  return (
    <div className={styles.area}>
      <div className={`${styles.batente} ${selecao}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>3</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
