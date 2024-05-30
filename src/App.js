import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import Registration from "./Registration";
import { useState } from "react";
import data from "./JSON/ProductData.json";

const { Button } = chakraTheme.components;
const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  const [prods, setProds] = useState([...data]);

  return (
    <ChakraBaseProvider theme={theme}>
      <Registration prods={prods} setProds={setProds} />
    </ChakraBaseProvider>
  );
}

export default App;
