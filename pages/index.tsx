import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Neumorphism } from "../components/neumorphism/Neumorphism";
import { FormProvider } from "../context/FormProvider";
import { Form } from "../components/form/Form";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SHADOW - RD DESIGN</title>
        <meta name="description" content="Generate your own Soft-UI CSS code" />
        <link rel="icon" href="https://img.icons8.com/fluency-systems-filled/120/ffffff/harry-potter.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Neumorphism</h1>

        <p className={styles.desc}>
          Generate an
          <span>awesome shadow</span>
          for your website Simple and easy CSS generator
        </p>

        <div className={styles.container}>
          <FormProvider>
            <>
              <Neumorphism />
              <Form />
            </>
          </FormProvider>
        </div>
      </main>

      <footer className={styles.footer}>Created by HARII</footer>

      <div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>

    </>
  );
};

export default Home;
