import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card";
import EntradaNumerica from "../components/EntradaNumerica";
import styles from "../styles/index.module.scss";

export default function Home() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [portaPremiada, setPortaPremiada] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Card corFundo="#c0392c">
          <h1 style={{ fontSize: "5rem" }}>Monty Hall</h1>
        </Card>
        <Card>
          <EntradaNumerica
            text="Quantidade de Portas"
            value={qtdePortas}
            onChange={(novaQtde) => setQtdePortas(novaQtde)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <EntradaNumerica
            text="Porta Premiada"
            value={portaPremiada}
            onChange={(novaPremiada) => setPortaPremiada(novaPremiada)}
          />
        </Card>
        <Link href={`jogo/${qtdePortas}/${portaPremiada}`} style={{ textDecoration: "none" }}>
          <Card corFundo="#28a085">
            <span className={styles.link}>Começar</span>
          </Card>
        </Link>
      </div>
    </div>
  );
}
