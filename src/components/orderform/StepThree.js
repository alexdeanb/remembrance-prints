import { useState } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  Container,
  Stack,
} from "@mui/material";

export const StepThree = ({ allProducts, setCurrentOrder, currentOrder }) => {
  const [currentProduct, setCurrentProduct] = useState("NA");
  const [quantity, setCurrentQuantity] = useState(0);

  return (
    <>
      <Container>
        <Stack
          sx={{
            width: 300,
            mx: "auto",
            pt: 5,
          }}
          spacing={4}
        >
          <FormControl>
            <InputLabel id="mainItemSelectLabel">Primary Item</InputLabel>
            <Select
              sx={{
                width: 300,
              }}
              labelId="mainItemSelectLabel"
              label="Primary Item"
              id="mainItemSelect"
              value={currentOrder.mainItem}
              onChange={(evt) => {
                const copy = { ...currentOrder };
                setCurrentProduct(evt.target.value);
                copy.mainItem = evt.target.value;
                setCurrentOrder(copy);
              }}
            >
              {allProducts
                .map((product) => {
                  return (
                    <MenuItem key={product.id} value={product.name}>
                      {product.name}
                    </MenuItem>
                  );
                })
                .slice(0, 3)}
            </Select>
          </FormControl>
          <TextField
            sx={{
              width: 300,
            }}
            id="mainItemQuantity"
            label="Quantity"
            variant="outlined"
            value={currentOrder.mainItemQty}
            required
            onChange={(evt) => {
              const copy = { ...currentOrder };
              setCurrentQuantity(parseInt(evt.target.value));
              copy.mainItemQty = parseInt(evt.target.value);
              setCurrentOrder(copy);
            }}
          />
          <TextField
            sx={{
              width: 300,
            }}
            id="mainItemVerse"
            label="Verse"
            required
            value={currentOrder.programVerse}
            variant="outlined"
            onChange={(evt) => {
              const copy = { ...currentOrder };
              copy.programVerse = evt.target.value;
              setCurrentOrder(copy);
            }}
          />
        </Stack>
      </Container>
    </>
  );
};

//https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
