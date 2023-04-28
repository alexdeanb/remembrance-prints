import { useState } from "react";
import { Stepper, Step, StepLabel, Button, ButtonGroup } from "@mui/material";
import { FormRenderer } from "./FormRenderer";


export const OrderFormStepper = () => {

  const [activeStep, setActiveStep] = useState(0);

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

        <FormRenderer currentStep={activeStep} setCurrentStep={setActiveStep}/>


      </div>
    </>
  );
};
