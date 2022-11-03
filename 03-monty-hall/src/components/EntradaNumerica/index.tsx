import styles from "./styles.module.scss";

interface Props {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export default function EntradaNumerica({ text, value, onChange }: Props) {
  return (
    <div className={styles.entradaNumerica}>
      <span className={styles.texto}>{text}</span>
      <span className={styles.valor}>{value}</span>
    </div>
  );
}
