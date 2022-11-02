import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Porta from "../../components/Porta";
import { atualizarPortas, criarPortas } from "../../functions/Porta";
import styles from "./styles.module.scss";

export default function Jogo() {
  const router = useRouter();

  const [portas, setPortas] = useState([]);

  useEffect(() => {
    if (router.query?.params) {
      const [qntPortas, portaPremiada] = router.query.params;
      setPortas(criarPortas(+qntPortas, +portaPremiada));
    }
  }, [router.query?.params]);

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
