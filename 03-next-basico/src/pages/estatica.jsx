import Link from "next/link";

export function getStaticProps() {
  const res = {
    props: {
      n: Math.random(),
    },
  };
  return res;
}

export default function Estatica(props) {
  return (
    <div>
      <p>Valor aleatório: {props.n}</p>
      <p>
        * Somente será possível visualizar o efeito de renderização estática em modo de PRODUÇÃO! *
      </p>
      <Link href="/">Voltar</Link>
    </div>
  );
}
