import {
  Fab,
  Icon,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export const StepThree = ({
  addProductToOrder,
  currentOrderProducts,
  currentOrder,
  previouslyOrdered,
}) => {
  const newProductId = previouslyOrdered.length + 1;

  const [products, setProducts] = useState([]);
  const [added, setAdded] = useState(false);
  const [productOptions, setProductOptions] = useState([]);

  const [activeProduct, setActiveProduct] = useState({
    orderId: currentOrder.id,
    productId: 0,
    quantity: 0,
    id: newProductId,
  });

  const [activeProductOptions, setActiveProductOptions] = useState({
    id: 0,
    orderProductsId: newProductId,
    attribute: "",
  });

  useEffect(
    () => {
      fetch("http://localhost:8088/products")
        .then((response) => response.json())
        .then((productArray) => {
          setProducts(productArray);
        });
    },
    [] // When this array is empty, you are observing initial component state
  );

  useEffect(() => {
    fetch("http://localhost:8088/productOptions")
      .then((response) => response.json())
      .then((productOptionsArray) => {
        setProductOptions(productOptionsArray);

        const copy = { ...activeProductOptions };
        copy.id = productOptions.length + 1;
        setActiveProductOptions(copy);
      });
  }, [productOptions]);

  return (
    <>
      <div className="form-group">
        <InputLabel id="newProduct_primaryItem_label">Primary Item</InputLabel>
        <Select
          labelId="newProduct_primaryItem_label"
          className="newProduct_primaryItem"
          value={activeProduct.productId}
          autoWidth
          onChange={(evt) => {
            const copy = { ...activeProduct };
            copy.productId = parseInt(evt.target.value);
            setActiveProduct(copy);
          }}
        >
          <MenuItem key="0" value="0">
            Primary Item
          </MenuItem>
          {products
            .map((product) => {
              return (
                <MenuItem key={product.id} value={product.id}>
                  {product.name}
                </MenuItem>
              );
            })
            .slice(0, 3)}
        </Select>
      </div>
      <div>
        <TextField
          label="Quantity"
          type="number"
          className="itemQuantity"
          value={activeProduct.quantity}
          onChange={(evt) => {
            const copy = { ...activeProduct };
            copy.quantity = parseInt(evt.target.value);
            setActiveProduct(copy);
          }}
        />
      </div>
      {activeProduct.productId > 0 && activeProduct.productId < 3 ? (
        <div className="form-group">
          <TextField
            label="Program Verse"
            autoFocus
            type="text"
            className="programVerse"
            value={activeProductOptions.attribute}
            onChange={(evt) => {
              const copy = { ...activeProductOptions };
              copy.attribute = evt.target.value;
              setActiveProductOptions(copy);
            }}
          />
        </div>
      ) : (
        ""
      )}
      <div>
        <Fab onClick={() => setAdded(true)}>
          {added ? <Icon>done</Icon> : <Icon>add</Icon>}
        </Fab>
      </div>
    </>
  );
};
