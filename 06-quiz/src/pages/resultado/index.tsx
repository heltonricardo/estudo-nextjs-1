import { useRouter } from "next/router";
import Botao from "../../components/Botao";
import Estatistica from "../../components/Estatistica";
import styles from "./styles.module.scss";

export default function Resultado() {
  const router = useRouter();

  const total = +(router.query.total || 0);
  const acertadas = +(router.query.acertadas || 0);
  const percentual = Math.round((acertadas * 100) / (total || 1));

  return (
    <div className={styles.resultado}>
      <h1 className={styles.titulo}>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Acertadas" valor={acertadas} corFundo="#9cd2a4" />
        <Estatistica texto="Percentual" valor={`${percentual}%`} corFundo="#de6a33" />
      </div>
      <Botao href="/">Iniciar</Botao>
    </div>
  );
}
