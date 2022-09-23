import { Stack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Formulario from "../components/Formulario/Formulario";
import NavBar from "../components/NavBar/NavBar";
import HomePage from "../components/Home/HomePage";
import Dashboard from "../components/Dashboard/Dashboard";
import Footer from "../components/Footer/Footer";
import AppLayout from "../components/AppLayout/AppLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nucleo Wiki</title>
        <meta name="description" content="Nucle Wiki by Nucleo" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <AppLayout>
        <HomePage></HomePage>
      </AppLayout>
    </>
  );
}
