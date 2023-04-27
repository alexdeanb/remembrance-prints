import { useEffect, useState } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

export const StepThree = ({ setCurrentOrder, currentOrder }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState("NA");
  const [quantity, setCurrentQuantity] = useState(0)


  useEffect(
    () => {
      fetch("http://localhost:8088/products")
        .then((response) => response.json())
        .then((productArray) => {
          setAllProducts(productArray);
        });
    },
    []
  );


  return (
    <>
      <div>
        <FormControl>
          <InputLabel id="mainItemSelectLabel">Primary Item</InputLabel>
          <Select
            labelId="mainItemSelectLabel"
            id="mainItemSelect"
            value={currentProduct}
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
                  <MenuItem key={product.id} value={product.value}>
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
