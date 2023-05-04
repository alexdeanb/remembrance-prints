import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { StepFive } from "./StepFive";
import { Box, Button, ButtonGroup, Container, FormControl } from "@mui/material";
import { OrderDisplay } from "./OrderDisplay";

export const FormRenderer = ({
  allProducts,
  locations,
  currentStep,
  setCurrentStep,
  order,
  updateOrder,
  handleSaveButtonClick,
  decedent,
  updateDecedent,
}) => {
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      {
        {
          0: (
            <StepOne
              locations={locations}
              setCurrentOrder={updateOrder}
              currentOrder={order}
            />
          ),
          1: (
            <StepTwo setDecedent={updateDecedent} currentDecedent={decedent} />
          ),
          2: (
            <StepThree
              allProducts={allProducts}
              setCurrentOrder={updateOrder}
              currentOrder={order}
            />
          ),
          3: (
            <StepFour
              allProducts={allProducts}
              setCurrentOrder={updateOrder}
              currentOrder={order}
            />
          ),
          4: <StepFive setCurrentOrder={updateOrder} currentOrder={order} />,
        }[currentStep]
      }
      
      <Box textAlign="center" sx={{pt:5}}>
        <ButtonGroup variant="contained" >
        {currentStep > 0 ? (
          <Button onClick={() => previousStep()}>Previous Step</Button>
        ) : (
          ""
        )}
        {currentStep < 4 ? (
          <Button onClick={() => nextStep()}>Next Step</Button>
        ) : (
          <Button onClick={(event) => handleSaveButtonClick(event)}>
            Submit Order
          </Button>
        )}
      </ButtonGroup>
      </Box>
      <OrderDisplay order={order} decedent={decedent} setOrder={updateOrder} />
    </>
  );
};
