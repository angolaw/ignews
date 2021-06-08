import Head from "next/head";
import { GetServerSideProps, GetStaticProps } from "next";
import { SubscribeButton } from "../components/CustomButton";
//cada arquivo dentro da pasta pages se torna uma rota do site
import styles from "./home.module.scss";
import { stripe } from "../services/stripe";
import React from "react";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}
export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton
            priceId={product.priceId}
            title="Subscribe now"
            onPress={() => {}}
          />
        </section>
        <img src="/images/avatar.svg" alt="avatar" />
      </main>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1J060gCrRlYlMKz15ZVQa6pw", {
    expand: ["product"],
  });
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };
  return {
    props: {
      product: product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
