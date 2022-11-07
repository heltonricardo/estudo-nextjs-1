interface Props {
  numero: number;
}

export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Estatica02(props: Props) {
  return (
    <div>
      <h1>Estática #02</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}

/* Quando exportamos uma função com nome getStaticProps, o next entende que
 * a página é gerada de forma estática. Essa estratégia é usada quando não há
 * necessidade de personalizar a página para cada usuário que faz a requisição.
 * O valor carregado na props será gerado em momento de compilação. Toda
 * requisição receberá a mesma página (só é possível notar isso em modo de
 * produção - npm run build / npm start).
 *
 *  Ver: https://gist.github.com/heltonricardo/2007f05975d0ccbd3c0e5e9bec6a7b61
 */
