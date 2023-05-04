import { useState } from "react";
import { OrderFormStepper } from "./OrderFormStepper";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export const CreateOrder = () => {
  const localPrintsUser = localStorage.getItem("prints_user");
  const printsUserObject = JSON.parse(localPrintsUser);

  const navigate = useNavigate();

  const [order, updateOrder] = useState({
    designer: null,
    customer: printsUserObject.id,
    locationId: 0,
    dateOrdered: dayjs().format("YYYY/MM/DD"),
    dateNeeded: dayjs().format("YYYY/MM/DD"),
    caseNumber: 0,
    theme: "",
    mainItem: "",
    mainItemQty: 0,
    photobook: 0,
    bookmarks: 0,
    candle: 0,
    prayerCards: 0,
    signBoard: 0,
    portrait: 0,
    collageL: 0,
    collageS: 0,
    collageLNames: false,
    collageLDates: false,
    collageSNames: false,
    collageSDates: false,
    TYCardPortrait: 0,
    TYCardCollage: 0,
    TYCardVerse: "",
    programVerse: "",
    capPanel: 0,
    insert: 0,
    specialNotes: "",
    completed: false,
    dateCompleted: ""
  });

  const [decedent, updateDecedent] = useState({
    name: "",
    dob: dayjs().format("YYYY/MM/DD"),
    dod: dayjs().format("YYYY/MM/DD"),
  });

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    if (
      order.locationId != 0 &&
      order.caseNumber != 0 &&
      order.theme != "" &&
      order.primaryItem != ""
    ) {
      return fetch(`http://localhost:8088/decedents`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(decedent),
      })
        .then((response) => response.json())
        .then((postedDecedent) => {
          order["decedentId"] = postedDecedent.id;
          return fetch(`http://localhost:8088/orders`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
          });
        })
        .then(() => {
          navigate("/");
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
