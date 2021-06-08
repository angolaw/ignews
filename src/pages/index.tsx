import Head from "next/head";
import { CustomButton } from "../components/CustomButton";
//cada arquivo dentro da pasta pages se torna uma rota do site
import styles from "./home.module.scss";
export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.hero}>
          <span> 👏 Hey, Welcome</span>
          <h1>
            News about the <br />
            <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications
            <br />
            <span>for $9.90 month</span>
          </p>
          <CustomButton title="Subscribe now" onPress={() => {}} />
        </section>
        <img src="/images/avatar.svg" alt="avatar" />
      </main>
    </>
  );
}
