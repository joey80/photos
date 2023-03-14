import Head from 'next/head';
import { LoginContainer } from '@/containers/Login';

function Home() {
  return (
    <>
      <Head>
        <title>Photos | Joeyui.com</title>
      </Head>
      <main>
        <LoginContainer />
      </main>
    </>
  );
}

export default Home;
