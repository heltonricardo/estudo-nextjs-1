import Link from "next/link";
import { useRouter } from "next/router";

export default function Params() {
  const router = useRouter();
  const nome = router.query.nome;
  const idade = router.query.idade;

  return (
    <div>
      <h1>Nome: {nome}</h1>
      <h1>Idade: {idade}</h1>
      <Link href="/">Voltar</Link>
    </div>
  );
}
