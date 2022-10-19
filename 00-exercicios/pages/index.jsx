import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>00-exercicios</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ol style={{ fontSize: "20px" }}>
          <li>
            <a href="/basicos/primeiro">Primeiro</a>
          </li>
          <li>
            <a href="/basicos/jsx01">JSX 01</a>
          </li>
          <li>
            <a href="/basicos/jsx02">JSX 02</a>
          </li>
          <li>
            <a href="/basicos/jsx03">JSX 03</a>
          </li>
          <li>
            <a href="/basicos/jsx04">JSX 04</a>
          </li>
          <li>
            <a href="/basicos/lista01">Lista 01</a>
          </li>
          <li>
            <a href="/basicos/fragment01">Fragmento 01</a>
          </li>
          <li>
            <a href="/basicos/usando-titulo">Usando Componente</a>
          </li>
          <li>
            <a href="/basicos/estilos/integracao01">Integração CSS 01</a>
          </li>
          <li>
            <a href="/basicos/estilos/integracao02">Integração CSS 02</a>
          </li>
          <li>
            <a href="/basicos/estilos/usando-estilos">Aplicando Estilo CSS</a>
          </li>
          <li>
            <a href="/basicos/estilos/usando-estilos">Aplicando Estilo CSS</a>
          </li>
          <li>
            <a href="/render/repeticao01">Repetição 01</a>
          </li>
          <li>
            <a href="/render/condicional01">Condicional 01</a>
          </li>
          <li>
            <a href="/render/condicional02">Condicional 02</a>
          </li>
          <li>
            <a href="/basicos/componente-com-filho">Componente com Filho</a>
          </li>
          <li>
            <a href="/comunicacao/direta">Comunicação Direta</a>
          </li>
          <li>
            <a href="/basicos/botao">Eventos JS</a>
          </li>
        </ol>
      </main>
    </div>
  );
}
