import Head from "next/head";
import Link from "next/link";
import router from "next/router";
import styles from "../styles/Home.module.css";

const lista = [
  ["/rotas/123/buscar", "Rota dinâmica 1"],
  ["/rotas/olhe-a-url/é-rota-dinamica", "Rota dinâmica 2"],
  ["/rotas/params?nome=helton&idade=25", "Usando parâmetros"],
];

export default () => (
  <div className={styles.container}>
    <Head>
      <title>02-next-basico</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <ol
        style={{
          fontSize: "20px",
          lineHeight: "30px",
          margin: "20px 0 0 40px",
          listStyle: "number",
        }}
      >
        {lista.map(([url, titulo], i) => (
          <li key={i}>
            <Link href={url}>{titulo}</Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => router.push("/rotas/programatico?nome=Helton")}
          >
            Roteamento programático 1
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              router.push({
                pathname: "/rotas/programatico",
                query: { id: "13", nome: "Helton" },
              })
            }
          >
            Roteamento programático 2
          </button>
        </li>
      </ol>
    </main>
  </div>
);
