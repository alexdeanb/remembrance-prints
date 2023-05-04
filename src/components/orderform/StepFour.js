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
  MenuItem,
  Checkbox,
  FormControlLabel,
  Container,
  Stack,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import { OrderDisplay } from "./OrderDisplay";

export const StepFour = ({ allProducts, setCurrentOrder, currentOrder }) => {
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("NA");
  const [quantity, setCurrentQuantity] = useState(0);
  const [collageNames, setCollageNames] = useState(false);
  const [collageDates, setCollageDates] = useState(false);

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
    setCollageNames(false);
    setCollageDates(false);
  };

  const collageOptions = (activeProduct) => {
    if (activeProduct === "collageL" || activeProduct === "collageS") {
      return (
        <>
          <FormControlLabel
            label="Names"
            control={
              <Checkbox
                label="Names"
                checked={collageNames}
                onChange={(evt) => {
                  setCollageNames(evt.target.checked);
                  const copy = { ...currentOrder };
                  let field = activeProduct + "Names";
                  copy[field] = evt.target.checked;
                  setCurrentOrder(copy);
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
          />

          <FormControlLabel
            label="Dates"
            control={
              <Checkbox
                label="Dates"
                checked={collageDates}
                onChange={(evt) => {
                  setCollageDates(evt.target.checked);
                  const copy = { ...currentOrder };
                  let field = activeProduct + "Dates";
                  copy[field] = evt.target.checked;
                  setCurrentOrder(copy);
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
          />
        </>
      );
    }
  };

  return (
    <>
      <Container>
        <Stack
          sx={{
            width: 56,
            mx: "auto",
            mt: 5,
          }}
          spacing={4}
        >
          <FormControl>
            <Fab onClick={handleClickOpen}>
              <Icon>add</Icon>
            </Fab>
          </FormControl>
        </Stack>
      </Container>
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
    </>
  );
};
