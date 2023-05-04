import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import "./OrderDisplay.css";

export const OrderDisplay = ({ order, decedent, setOrder }) => {
  const [locations, setLocations] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/locations")
      .then((response) => response.json())
      .then((locationArray) => {
        setLocations(locationArray);
      });
    fetch("http://localhost:8088/products")
      .then((response) => response.json())
      .then((productArray) => {
        setProducts(productArray);
      });
  }, []);

  const validProducts = () => {
    products.map((product) => {
      if (order[product.value] > 0) {
        return (
          <li>
            {product.value} {order[product.value]}
          </li>
        );
      } else {
        return <li>aaaaaaa</li>;
      }
    });
  };

  return (
    <>
      <div className="OrderSummary">
        <div className="generalInfo info">
          <h3>General Order Information</h3>
          <ul>
            <li>
              Location:{" "}
              {order.locationId > 0
                ? locations.find((location) => location.id === order.locationId)
                    ?.name
                : ""}
            </li>
            <li>Case Number: {order.caseNumber}</li>
            <li>Date Needed: {order.dateNeeded}</li>
            <li>Theme: {order.theme}</li>
          </ul>
        </div>
        <div className="decedentInfo info">
          <h3>Decedent Information</h3>
          <ul>
            <li>Name: {decedent.name}</li>
            <li>DOB: {decedent.dod}</li>
            <li>DOB: {decedent.dob}</li>
          </ul>
        </div>
        <div className="itemInfo info">
          <h3>Items Ordered</h3>
          <ul>
            <li>Main Item: {order.mainItem}</li>
            <li>Main Item Quantity: {order.mainItemQty}</li>
            {products.map((product) => {
              if (order[product.value] > 0) {
                return (
                  <>
                    <li>
                      {product.name}: {order[product.value]}
                      <Button
                        onClick={() => {
                          const copy = { ...order };
                          copy[product.value] = 0;
                          setOrder(copy);
                        }}
                      >
                        Remove Item
                      </Button>
                    </li>
                  </>
                );
              } else {
                return;
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );

  //Display Main Item
  //Display Main Item Qty
  //Display Additional Items and Quantity
};
