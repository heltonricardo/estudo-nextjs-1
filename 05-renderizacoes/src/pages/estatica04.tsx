import BASE_URL from "../constants/envs";
import Produto from "../interfaces/Produto";

export async function getStaticProps() {
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

export default function Estatica04({ produtos }: Props) {
  console.log("[CLIENT] Executa somente no cliente. Essa mensagem aparece no console.");

  function renderProdutos() {
    return produtos.map((p) => (
      <li key={p.id}>
        {p.id} :: {p.nome} :: R$ {p.preco}
      </li>
    ));
  }

  return (
    <div>
      <h1>Estática #04</h1>
      <ul>{renderProdutos()}</ul>
    </div>
  );
}

/* Para fazer build do projeto com essa página, é necessário ter dois terminais:
 * um executando `npm run dev` para que no outro possamos executar
 * `npm run build`. Isso ocorre porque, como a página é gerada em tempo de
 * compilação, é preciso que a rota de api esteja de pé para que seja acessada e
 * retorne os dados necessários para construção da página.
 */
