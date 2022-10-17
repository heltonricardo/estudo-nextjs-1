import styles from "./styles.module.css";

export default ({ preto = false }) => (
  <div
    className={`${styles.quadrado} ${preto ? styles.preto : styles.branco}`}
  ></div>
);
