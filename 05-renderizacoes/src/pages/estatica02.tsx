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

export default function Estatica01(props: Props) {
  return (
    <div>
      <h1>Estática #02</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
