import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

export const StepFive = ({ setCurrentOrder, currentOrder }) => {


  return (
    <div>
    <TextField
      id="filled-multiline-flexible"
      label="Special Notes"
      multiline
      fullWidth
      variant="filled"
      onChange={(evt) => {
        const copy = { ...currentOrder };
        copy.specialNotes = evt.target.value;
        setCurrentOrder(copy);
      }}
    />
    </div>
  );
};
