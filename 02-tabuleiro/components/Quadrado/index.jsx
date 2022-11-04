import styles from "./styles.module.css";

export default function Quadrado({ preto = false }) {
  return <div className={`${styles.quadrado} ${preto ? styles.preto : styles.branco}`}></div>;
}
