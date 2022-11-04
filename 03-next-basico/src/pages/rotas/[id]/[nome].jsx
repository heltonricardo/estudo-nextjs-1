import Link from "next/link";
import { useRouter } from "next/router";

export default function Nome() {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome;

  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Nome: {nome}</h1>
      <Link href="/">Voltar</Link>
    </div>
  );
}
