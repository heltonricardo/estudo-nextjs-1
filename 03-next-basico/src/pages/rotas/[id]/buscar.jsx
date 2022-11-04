import Link from "next/link";
import { useRouter } from "next/router";

export default function Buscar() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <p>
        Rotas {">"} {id} {">"} Buscar
      </p>
      <Link href="/">Voltar</Link>
    </div>
  );
}
