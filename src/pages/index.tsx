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
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <div className={styles.greeting}>
              <h3>
                <span> 👏 </span> Hey, Welcome
              </h3>
            </div>
            <div className={styles.headline}>
              <h1>News about</h1>
              <h1>
                the <span>React</span> world
              </h1>
            </div>
            <div className={styles.bottomText}>
              <h3>Get access to all the publications</h3>
              <h3>
                <span>for $9.90 month</span>
              </h3>
              <CustomButton title="Subscribe now" />
            </div>
          </div>
          <div className={styles.contentRight}>
            <img src="/images/avatar.svg" alt="avatar" />
          </div>
        </div>
      </div>
    </>
  );
}
