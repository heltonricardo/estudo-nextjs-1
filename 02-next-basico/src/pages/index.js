import Head from "next/head";
import styles from "../styles/Home.module.css";

const lista = [["/rotas/olhe-a-url/é-dinamica", "Rota dinâmica"]];

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
          margin: "20px 0 0 40px",
          listStyle: "circle",
        }}
      >
        {lista.map((e, i) => (
          <li key={i}>
            <a href={e[0]}>{e[1]}</a>
          </li>
        ))}
      </ol>
    </main>
  </div>
);