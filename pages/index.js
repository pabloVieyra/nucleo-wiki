import NavBar from "../components/NavBar/NavBar";
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
      </Head>
      <HomePage></HomePage>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
