import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "../components/AppLayout/AppLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
