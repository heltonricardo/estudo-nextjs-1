import Link from "next/link";
import { useState } from "react";
import Porta from "../../components/Porta";
import { atualizarPortas, criarPortas } from "../../functions/Porta";
import styles from "./styles.module.scss";

export default function Jogo() {
  const [portas, setPortas] = useState(criarPortas(5, 3));

  function renderPortas() {
    return portas.map((p) => (
      <Porta
        key={p.numero}
        value={p}
        onChange={(novaPorta) => setPortas(atualizarPortas(portas, novaPorta))}
      />
    ));
  }

  return (
    <div className={styles.oJogo}>
      <div className={styles.portas}>{renderPortas()}</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  );
}
