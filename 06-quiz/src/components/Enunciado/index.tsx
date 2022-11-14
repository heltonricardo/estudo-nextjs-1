import styles from "./styles.module.scss";

interface Props {
  enunciado: string;
}

export default function Enunciado({ enunciado: texto }: Props) {
  return (
    <div className={styles.enunciado}>
      <span className={styles.texto}>{texto}</span>
    </div>
  );
}
