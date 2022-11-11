import Landing from "../components/Landing/Landing";
import HomePage from "../components/Home/HomePage";
import Dashboard from "../components/Dashboard/Dashboard";
import AppLayout from "../components/AppLayout/AppLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nucleo Wiki</title>
        <meta name="description" content="Nucle Wiki by Nucleo" />
        <link rel="icon" href="../public/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomePage></HomePage>
      <Landing></Landing>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
