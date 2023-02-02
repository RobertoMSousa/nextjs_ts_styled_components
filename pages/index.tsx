import Head from "next/head";
import LinkMenu from "../components/LinkMenu";

const Home = () => {
  return (
    <>
      <Head>
        <title>Next js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LinkMenu />
        <h1>Next JS with TS and styled components setup</h1>
      </main>
    </>
  );
};

export default Home;
