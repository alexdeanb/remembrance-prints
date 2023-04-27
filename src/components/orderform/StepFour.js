import {
  Fab,
  Icon,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Select,
  InputLabel,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export const StepFour = ({ setCurrentOrder, currentOrder }) => {
  const [open, setOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState("NA");
  const [quantity, setCurrentQuantity] = useState(0);
  const [collageNames, setCollageNames] = useState(false)
  const [collageDates, setCollageDates] = useState(false)

  useEffect(() => {
    fetch("http://localhost:8088/products")
      .then((response) => response.json())
      .then((productArray) => {
        setAllProducts(productArray);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (currentProduct !== "NA") {
      const copy = { ...currentOrder };
      copy[currentProduct] = quantity;
      setCurrentOrder(copy);
      productReset();
      setOpen(false);
    } else {
      productReset();
      setOpen(false);
    }
  };

  const productReset = () => {
    setCurrentProduct("NA");
    setCurrentQuantity(0);
  };

  const collageOptions = (activeProduct) => {
    if (activeProduct === "collageL" || activeProduct === "collageS") {
      return (
        <>
        <Checkbox
          checked={collageNames}
          onChange={setCollageNames(!collageNames)}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Checkbox
          checked={collageDates}
          onChange={setCollageDates(!collageDates)}
          inputProps={{ "aria-label": "controlled" }}
        />
        </>);
    }
  };

  return (
    <div>
      <Fab onClick={handleClickOpen}>
        <Icon>add</Icon>
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Additional Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please select what you'd like to add to your order.
          </DialogContentText>
          <Select
            id="AdditionalSelect"
            value={currentProduct}
            onChange={(evt) => {
              setCurrentProduct(evt.target.value);
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
              .slice(3, -1)}
          </Select>
          <TextField
            id="mainItemQuantity"
            label="Quantity"
            variant="outlined"
            onChange={(evt) => {
              setCurrentQuantity(parseInt(evt.target.value));
            }}
          />
          {collageOptions(currentProduct)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Product</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
