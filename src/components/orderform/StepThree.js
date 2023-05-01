import { useState } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

export const StepThree = ({ allProducts, setCurrentOrder, currentOrder }) => {

  const [currentProduct, setCurrentProduct] = useState("NA");
  const [quantity, setCurrentQuantity] = useState(0)



  return (
    <>
      <div>
        <FormControl>
          <InputLabel id="mainItemSelectLabel">Primary Item</InputLabel>
          <Select
            labelId="mainItemSelectLabel"
            id="mainItemSelect"
            value={currentOrder.mainItem}
            label="Primary Item"
            onChange={(evt) => {
              const copy = { ...currentOrder };
              setCurrentProduct(evt.target.value)
              copy.mainItem = evt.target.value;
              setCurrentOrder(copy);
            }}
          >
            <MenuItem key="0" value="NA">
              Select an Item...
            </MenuItem>
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
          <TextField
            id="mainItemQuantity"
            label="Quantity"
            variant="outlined"
            value={currentOrder.mainItemQty}
            required
            onChange={(evt) => {
              const copy = { ...currentOrder };
              setCurrentQuantity(parseInt(evt.target.value))
              copy.mainItemQty = parseInt(evt.target.value);
              setCurrentOrder(copy);
            }}
          />
           <TextField
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
        </FormControl>
      </div>
    </>
  );
};

//https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
