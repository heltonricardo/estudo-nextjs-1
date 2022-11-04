import styles from "./styles.module.scss";

interface Props {
  corFundo?: string;
  children?: any;
}

export default function Card({ corFundo, children }: Props) {
  return (
    <div className={styles.card} style={{ background: corFundo || "white" }}>
      {children}
    </div>
  );
}
