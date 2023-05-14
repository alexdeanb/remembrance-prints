import { useState } from "react";
import { CompletedOrders } from "./CompletedOrders";
import { CurrentOrders } from "./CurrentOrders";
import { Button } from "@mui/material";

export const OrderViewer = () => {
  const [completed, setCompleted] = useState(false);

  const viewerBody = () => {
    if (completed) {
      return <CompletedOrders />;
    } else {
      return <CurrentOrders />;
    }
  };

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <>
      {viewerBody()}
      <Button onClick={toggleCompleted}>Toggle Order Type</Button>
    </>
  );
};
