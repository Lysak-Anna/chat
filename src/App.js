import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/theme";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout />
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
