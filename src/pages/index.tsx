import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
//cada arquivo dentro da pasta pages se torna uma rota do site

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Hello!</h1>
    </div>
  );
}
