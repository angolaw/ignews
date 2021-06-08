import Head from "next/head";
import { Header } from "../components/Header";
import styles from "../styles/home.module.scss";
//cada arquivo dentro da pasta pages se torna uma rota do site

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>

      <div>
        <Header />
      </div>
    </>
  );
}
