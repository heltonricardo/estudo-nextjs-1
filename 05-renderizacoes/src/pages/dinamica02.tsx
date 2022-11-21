import BASE_URL from "../constants/envs";
import Produto from "../interfaces/Produto";

export async function getServerSideProps() {
  console.log("[SERVER] Executa somente no servidor. Essa mensagem aparece no terminal.");

  const res = await fetch(`${BASE_URL}/api/produtos`);
  const produtos = await res.json();
  return {
    props: { produtos },
  };
}

interface Props {
  produtos: Produto[];
}

export default function Dinamica02({ produtos }: Props) {
  console.log("[SERVER / CLIENT] Executa em ambos os lados da aplicação.");

  function renderProdutos() {
    return produtos.map((p) => (
      <li key={p.id}>
        {p.id} :: {p.nome} :: R$ {p.preco}
      </li>
    ));
  }

  return (
    <div>
      <h1>Dinâmica #02</h1>
      <ul>{renderProdutos()}</ul>
    </div>
  );
}

/* Como já demonstrado, ao exportar a função getServerSideProps, uma nova página
 * é gerada para cada requisição. Pode-se notar os ID's mudando a cada
 * atualização do navagador estando em modo produção. Como a função Dinamica02 é
 * executada no servidor também, o console log será impresso tanto no servidor
 * quanto no cliente (browser).
 */
