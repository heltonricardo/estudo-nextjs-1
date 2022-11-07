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

/* O valor carregado na props será gerado em momento de compilação. Toda
 * requisição receberá a mesma página (só é possível notar isso em modo de
 * produção - npm run build / npm start).
 */
