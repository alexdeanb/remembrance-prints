import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";


export const StepOne = ({
  setCurrentOrder,
  currentOrder,
  locations,
  setLocations,
}) => {
  const [value, setValue] = useState(dayjs());

  return (
    <>
      <Container>
        <Stack
          sx={{
            width: 300,
            mx: "auto",
            pt: 5,
          }}
          spacing={4}
        >
          <FormControl>
            <InputLabel id="newOrder_location_label">Location</InputLabel>
            <Select
              sx={{
                width: 300,
              }}
              labelId="newOrder_location_label"
              label="Location"
              autoWidth
              className="newOrder_location_Select"
              value={currentOrder.locationId}
              onChange={(evt) => {
                const copy = { ...currentOrder };
                copy.locationId = parseInt(evt.target.value);
                setCurrentOrder(copy);
              }}
            >
              {locations.map((location) => {
                return (
                  <MenuItem key={location.id} value={location.id}>
                    {location.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <TextField
            sx={{
              width: 300,
            }}
            label="Case Number"
            required={true}
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{
                width: 300,
              }}
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
          <TextField
            sx={{
              width: 300,
            }}
            label="Theme"
            required={true}
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
        </Stack>
      </Container>
      <div></div>
    </>
  );
};
