import Link from "next/link";

export default function P404() {
  return (
    <div>
      <h1>404 - Página inexistente :(</h1>
      <Link href="/">Voltar para a página principal</Link>
    </div>
  );
}
