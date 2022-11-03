import styles from "./styles.module.scss";

interface Props {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export default function EntradaNumerica({ text, value, onChange }: Props) {
  const dec = () => onChange(value - 1);
  const inc = () => onChange(value + 1);
  
  return (
    <div className={styles.entradaNumerica}>
      <span className={styles.texto}>{text}</span>
      <span className={styles.valor}>{value}</span>
      <div className={styles.botoes}>
        <button className={styles.btn} onClick={dec}>
          -
        </button>
        <button className={styles.btn} onClick={inc}>
          +
        </button>
      </div>
    </div>
  );
}
