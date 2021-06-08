import Head from "next/head";
import styles from "../styles/home.module.scss";
//cada arquivo dentro da pasta pages se torna uma rota do site

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>

      <div>
        <h1>Hello!</h1>
      </div>
    </>
  );
}
