import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OrderFormStepper } from "./OrderFormStepper";

export const EditOrder = () => {
  const { orderId } = useParams();
  const [order, updateOrder] = useState([]);
  const [decedent, updateDecedent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8088/orders/${orderId}`)
      .then((response) => response.json())
      .then((data) => {
        updateOrder(data);
        fetch(`http://localhost:8088/decedents/${data.decedentId}`)
          .then((response) => response.json())
          .then((newData) => {
            updateDecedent(newData);
          });
      });
  }, [orderId]);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    if (
      order.locationId != 0 &&
      order.caseNumber != 0 &&
      order.theme != "" &&
      order.primaryItem != ""
    ) {
      return fetch(`http://localhost:8088/decedents/${decedent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(decedent),
      })
        .then((response) => response.json())
        .then(() => {
          return fetch(`http://localhost:8088/orders/${orderId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
          });
        })
        .then(() => {
          navigate("/currentOrders");
        });
    } else {
      window.alert("Please check all required fields are added");
    }
  };

  return (
    <>
      <OrderFormStepper
        order={order}
        updateOrder={updateOrder}
        handleSaveButtonClick={handleSaveButtonClick}
        decedent={decedent}
        updateDecedent={updateDecedent}
      />
    </>
  );
};
