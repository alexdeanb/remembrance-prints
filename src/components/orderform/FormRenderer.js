import { useState, useEffect } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import dayjs from "dayjs";
import { StepFive } from "./StepFive";
import { Button, ButtonGroup, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const FormRenderer = ({ currentStep, setCurrentStep }) => {
  const localPrintsUser = localStorage.getItem("prints_user");
  const printsUserObject = JSON.parse(localPrintsUser);
  const navigate = useNavigate();

  const [order, updateOrder] = useState({
    designerId: 0,
    customerId: printsUserObject.id,
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
    } else{
      window.alert("Please check all required fields are added")
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    fetch("http://localhost:8088/decedents")
      .then((response) => response.json())
      .then((decedentArray) => {
        const copy = { ...decedent };
        copy.id = decedentArray.length + 1;
        updateDecedent(copy);
      });
  }, []);

  return (
    <>
      {
        {
          0: <StepOne setCurrentOrder={updateOrder} currentOrder={order} />,
          1: (
            <StepTwo setDecedent={updateDecedent} currentDecedent={decedent} />
          ),
          2: <StepThree setCurrentOrder={updateOrder} currentOrder={order} />,
          3: <StepFour setCurrentOrder={updateOrder} currentOrder={order} />,
          4: <StepFive setCurrentOrder={updateOrder} currentOrder={order} />,
        }[currentStep]
      }

      <ButtonGroup variant="contained">
        {currentStep > 0 ? (
          <Button onClick={() => previousStep()}>Previous Step</Button>
        ) : (
          ""
        )}
        {currentStep < 4 ? (
          <Button onClick={() => nextStep()}>Next Step</Button>
        ) : (
          <Button onClick={(event) => handleSaveButtonClick(event)}>Submit Order</Button>
        )}
      </ButtonGroup>
    </>
  );
};
