import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Formulário de início</h1>
      <p>
        <Link href="/jogo">Ir para tela do jogo</Link>
      </p>
    </div>
  );
}
