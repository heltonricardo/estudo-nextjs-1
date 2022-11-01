import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/Porta";

export default function Home() {
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

  return <div style={{ display: "flex" }}>{renderPortas()}</div>;
}
