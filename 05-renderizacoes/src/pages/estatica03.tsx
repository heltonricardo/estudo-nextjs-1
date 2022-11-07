interface Props {
  numero: number;
}

export function getStaticProps() {
  return {
    revalidate: 7,
    props: {
      numero: Math.random(),
    },
  };
}

export default function Estatica03(props: Props) {
  return (
    <div>
      <h1>Estática #03</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}

/* O atributo revalidate é o tempo, em segundos, para que ocorra a geração de
 * uma nova página a ser entregue nas próximas requisições, é possível
 * verificar esse efeito em modo produção.
 * 
 * Ver: https://gist.github.com/heltonricardo/2007f05975d0ccbd3c0e5e9bec6a7b61
 */