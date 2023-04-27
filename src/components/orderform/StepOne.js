import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";

export const StepOne = ({ setCurrentOrder, currentOrder }) => {
  const [locations, setLocations] = useState([]);
  const [value, setValue] = useState(dayjs());

  useEffect(
    () => {
      fetch("http://localhost:8088/locations")
        .then((response) => response.json())
        .then((locationArray) => {
          setLocations(locationArray);
        });
    },
    [] // When this array is empty, you are observing initial component state
  );

  return (
    <>
      <div className="form-group">
        <InputLabel id="newOrder_location_label">Location</InputLabel>
        <Select
          labelId="newOrder_location_label"
          autoWidth
          className="newOrder_location_Select"
          value={currentOrder.locationId}
          onChange={(evt) => {
            const copy = { ...currentOrder };
            copy.locationId = parseInt(evt.target.value);
            setCurrentOrder(copy);
          }}
        >
          <MenuItem key="0" value="0">
            Select a location...
          </MenuItem>
          {locations.map((location) => {
            return (
              <MenuItem key={location.id} value={location.id}>
                {location.name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div className="form-group">
        <TextField
          label="Case Number"
          required
          autoFocus
          type="number"
          className="caseNumber"
          value={currentOrder.caseNumber}
          onChange={(evt) => {
            const copy = { ...currentOrder };
            copy.caseNumber = parseInt(evt.target.value);
            setCurrentOrder(copy);
          }}
        />
      </div>
      <div className="form-group">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            required
            autoFocus
            label="Date Needed"
            type="date"
            className="dateNeeded"
            value={value}
            onChange={(evt) => {
              const copy = { ...currentOrder };
              copy.dateNeeded = evt.format("YYYY/MM/DD");
              setCurrentOrder(copy);
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="form-group">
        <TextField
          label="Theme"
          required
          autoFocus
          type="text"
          className="theme"
          value={currentOrder.theme}
          onChange={(evt) => {
            const copy = { ...currentOrder };
            copy.theme = evt.target.value;
            setCurrentOrder(copy);
          }}
        />
      </div>
    </>
  );
};
