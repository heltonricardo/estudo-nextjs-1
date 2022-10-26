import Link from "next/link";
import { useEffect, useState } from "react";

export default function NaoEstatica() {
  const [n, setN] = useState(0);
  useEffect(() => setN(Math.random()), []);

  return (
    <div>
      <p>Valor aleatório: {n}</p>
      <Link href="/">Voltar</Link>
    </div>
  );
}
