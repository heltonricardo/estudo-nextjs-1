import { useState } from "react";

const estiloDiv = { fontSize: "20px" };
const estiloBotao = { width: "50px", margin: "2rem" };

export default function Contador() {
  const [valor, setValor] = useState(0);
  const decrementar = () => setValor(Math.max(valor - 1, -5));
  const incrementar = () => setValor(Math.min(valor + 1, +5));

  return (
    <div style={estiloDiv}>
      <button style={estiloBotao} onClick={decrementar}>
        -
      </button>
      <span>{valor}</span>
      <button style={estiloBotao} onClick={incrementar}>
        +
      </button>
    </div>
  );
}
