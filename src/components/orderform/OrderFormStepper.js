import { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Button, ButtonGroup } from "@mui/material";
import { FormRenderer } from "./FormRenderer";

export const OrderFormStepper = ({
  order,
  updateOrder,
  decedent,
  updateDecedent,
  handleSaveButtonClick,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [locations, setLocations] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/locations")
      .then((response) => response.json())
      .then((locationArray) => {
        setLocations(locationArray);
      });

    fetch("http://localhost:8088/products")
      .then((response) => response.json())
      .then((productArray) => {
        setAllProducts(productArray);
      });
  }, []);

  return (
    <>
      <div>
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Order Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Decedent Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Primary Item</StepLabel>
          </Step>
          <Step>
            <StepLabel>Additional Items</StepLabel>
          </Step>
          <Step>
            <StepLabel>Special Notes</StepLabel>
          </Step>
        </Stepper>

        <FormRenderer
          allProducts={allProducts}
          locations={locations}
          currentStep={activeStep}
          setCurrentStep={setActiveStep}
          order={order}
          updateOrder={updateOrder}
          decedent={decedent}
          updateDecedent={updateDecedent}
          handleSaveButtonClick={handleSaveButtonClick}
        />
      </div>
    </>
  );
};
