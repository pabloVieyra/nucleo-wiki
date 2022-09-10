import { Stack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Formulario from "../components/Formulario/Formulario";
import NavBar from "../components/NavBar/NavBar";
import HomePage from "../components/Home/HomePage";
import Dashboard from "../components/Dashboard/Dashboard";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <Dashboard />
    </>
  );
}
