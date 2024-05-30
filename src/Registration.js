import React, { useState } from "react";
import "./App.css";
import { Button, Show, Stack, filter, useColorMode } from "@chakra-ui/react";
import OrderTable from "./OrderTable";

import data from "./JSON/SaleOrderForm.json";

const filterData = data.map((prod) => {
  return prod.filter((filterd) => {
    return filterd.paid === true;
  });
});

console.log("Dadd", filterData);

const Registration = ({ prods, setProds }) => {
  const [completed, setCompletd] = useState(false);
  const { toggleColorMode } = useColorMode();
  return (
    <div className="registration-container">
      <div className="top" width="100vw">
        <Button onClick={toggleColorMode} justifyContent="end">
          {document.body.classList.contains("chakra-ui-dark") ? "Switch Light" : "Switch Dark"}
        </Button>
      </div>
      <div className="main">
        <Stack spacing={4} direction={"row"} display="flex" gap="10px">
          <Button
            onClick={() => {
              setCompletd(true);
            }}
            colorScheme="green"
            width="50%"
          >
            Active Sale Order
          </Button>
          <Button colorScheme="green" width="50%">
            Completed Sale Order
          </Button>
        </Stack>
        <Button colorScheme="blue">+ Sale Order</Button>
      </div>
      <div className="content">{completed === false ? <Show></Show> : <OrderTable prods={prods} />}</div>
    </div>
  );
};

export default Registration;
