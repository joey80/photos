import Head from "next/head";
import styles from "@/styles/Home.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>Photos | Joeyui.com</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Photos app coming soon</p>
        </div>
      </main>
    </>
  );
}

export default Home;
