import Head from "next/head";
import Tabuleiro from "../components/Tabuleiro";

export default function Home() {
  return (
    <>
      <Head>
        <title>Xadrez</title>
        <meta name="Projeto Xadrez" content="Feito por Helton Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabuleiro />;
    </>
  );
}
