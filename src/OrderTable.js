import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, Stack } from "@chakra-ui/react";

const OrderTable = ({ prods }) => {
  console.log(prods);
  return (
    <TableContainer width="100%" id="container">
      <Table variant="striped" width="100%" colorScheme="teal">
        <Thead>
          <Tr>
            <Th isNumeric>ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Amount</Th>
            <Th>Unit</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody id="tbody">
          {prods.map((prod) =>
            prod.sku.map((sku) => {
              const { id, selling_price, amount, unit } = sku;
              return (
                <Tr key={id}>
                  <Td isNumeric>{id}</Td>
                  <Td>{prod.name}</Td> {/* Assuming you want to display the product name as customer name */}
                  <Td>{selling_price}</Td>
                  <Td>{amount}</Td>
                  <Td>{unit}</Td>
                  <Td>
                    <Stack direction="row" spacing={4} display="flex" gap="5px" justifyContent="center">
                      <Button colorScheme="blue" size="sm">
                        Edit
                      </Button>
                      <Button colorScheme="blue" size="sm">
                        View
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
