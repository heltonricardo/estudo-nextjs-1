import styles from "./styles.module.scss";

interface Props {
  texto: string;
  valor: any;
  corFonte?: string;
  corFundo?: string;
}

export default function Estatistica(props: Props) {
  return (
    <div className={styles.estatistica}>
      <div
        className={styles.valor}
        style={{
          color: props.corFonte || "#333",
          backgroundColor: props.corFundo || "#fdd60f",
        }}
      >
        {props.valor}
      </div>
      <div className={styles.texto}>{props.texto}</div>
    </div>
  );
}
