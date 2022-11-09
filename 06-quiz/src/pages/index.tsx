import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz com Next.js</title>
        <meta name="description" content="Quiz com Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
