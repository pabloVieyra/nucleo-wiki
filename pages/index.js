import { Stack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import HomePage from "../components/Home/HomePage";

export default function Home() {
  return (
    <Stack>
      <HomePage />
    </Stack>
  );
}
