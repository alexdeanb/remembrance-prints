import { useState, useEffect } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import dayjs from "dayjs";

export const FormRenderer = ({ currentStep }) => {
  const localPrintsUser = localStorage.getItem("prints_user");
  const printsUserObject = JSON.parse(localPrintsUser);


  const [order, updateOrder] = useState({
    designerId: 0,
    customerId: printsUserObject.id,
    locationId: 0,
    dateOrdered: dayjs().format("YYYY/MM/DD"),
    dateNeeded: dayjs().format("YYYY/MM/DD"),
    caseNumber: 0,
    decedentId: 0,
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
    programVerse:"",
    capPanel: 0,
    insert: 0,
    specialNotes: ""
  });

  const [decedent, updateDecedent] = useState({
    name: "",
    dob: dayjs().format("YYYY/MM/DD"),
    dod: dayjs().format("YYYY/MM/DD"),
  });

  // const [productOptions, updateProductOptions] = useState([])

  useEffect(
    () => {
      fetch("http://localhost:8088/decedents")
        .then((response) => response.json())
        .then((decedentArray) => {
          const copy = { ...decedent };
          copy.id = decedentArray.length + 1;
          updateDecedent(copy);
        });
    },
    [] // When this array is empty, you are observing initial component state
  );

  return (
    <>
      {
        {
          1: <StepOne setCurrentOrder={updateOrder} currentOrder={order} />,
          2: (
            <StepTwo setDecedent={updateDecedent} currentDecedent={decedent} />
          ),
          3: <StepThree setCurrentOrder={updateOrder} currentOrder={order} />,
          4: <StepFour setCurrentOrder={updateOrder} currentOrder={order} />,
          5: <></>,
        }[currentStep]
      }
    </>
  );
};
