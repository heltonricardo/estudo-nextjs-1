export function getServerSideProps() {
  console.log("[SERVER] Executa somente no servidor. Essa mensagem aparece no terminal.");

  return {
    props: {
      numero: Math.random(),
    },
  };
}

interface Props {
  numero: number;
}

export default function Dinamica01(props: Props) {
  return (
    <div>
      <h1>Dinâmica #01</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}

/* Quando exportamos uma função com nome getServerSideProps, o next entende que
 * a página é SSR (gerada pelo servidor a cada nova requisição). Usamos essa
 * abordagem geralmente quando é necessário que o usuário tenha uma página
 * personalizada, com alguns dados dele na tela, por exemplo.
 *
 * Ver: https://gist.github.com/heltonricardo/2007f05975d0ccbd3c0e5e9bec6a7b61
 */
