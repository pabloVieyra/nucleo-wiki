import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "../components/AppLayout/AppLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
