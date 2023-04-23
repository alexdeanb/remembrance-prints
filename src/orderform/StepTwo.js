import { TextField } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const StepTwo = ({ setDecedent, currentDecedent }) => {
  const [value, setValue] = useState(dayjs());

  return (
    <>
      <TextField
        label="Decedent Name"
        type="text"
        className="decedentName"
        value={currentDecedent.name}
        onChange={(evt) => {
          const copy = { ...currentDecedent };
          copy.name = evt.target.value;
          setDecedent(copy);
        }}
      />
      <div className="form-group">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            required
            autoFocus
            label="Date of Birth"
            type="date"
            className="dob"
            value={value}
            onChange={(evt) => {
              const copy = { ...currentDecedent };
              copy.dob = evt.format("YYYY/MM/DD");
              setDecedent(copy);
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="form-group">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            required
            autoFocus
            label="Date of Death"
            type="date"
            className="dod"
            value={value}
            onChange={(evt) => {
              const copy = { ...currentDecedent };
              copy.dod = evt.format("YYYY/MM/DD");
              setDecedent(copy);
            }}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};
