import Link from "next/link";
import { useRouter } from "next/router";

export default function Programatico() {
  const router = useRouter();

  const pathParams = JSON.stringify(router.query)
    .replace(/[\"{}]/g, "")
    .replace(/:/g, ": ")
    .replace(/,/g, ", ");

  return (
    <div>
      <p>Usando roteamento programático</p>
      <p>PathParams: {pathParams}</p>
      <Link href="/">Voltar</Link>
    </div>
  );
}
