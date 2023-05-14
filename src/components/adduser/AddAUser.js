import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";

export const AddAUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isDesigner: false,
  });

  let navigate = useNavigate();

  const registerNewUser = () => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(navigate("/roster"));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    return fetch(`http://localhost:8088/users?email=${user.email}`)
      .then((res) => res.json())
      .then((response) => {
        if (
          response.length > 0 ||
          user.name === "" ||
          user.password === "" ||
          user.password === ""
        ) {
          window.alert("Incorrect information submitted");
        } else {
          registerNewUser();
        }
      });
  };

  const updateUser = (evt) => {
    const copy = { ...user };
    copy[evt.target.id] = evt.target.value;
    setUser(copy);
  };
  const updateUserCheckbox = (evt) => {
    const copy = { ...user };
    copy[evt.target.id] = evt.target.checked;
    setUser(copy);
  };

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
          <TextField
            sx={{
              width: 300,
            }}
            label="Full Name"
            id="name"
            required={true}
            autoFocus
            type="text"
            value={user.name}
            onChange={(evt) => updateUser(evt)}
          />
          <TextField
            sx={{
              width: 300,
            }}
            label="Email"
            id="email"
            required={true}
            type="text"
            value={user.email}
            onChange={(evt) => updateUser(evt)}
          />
          <TextField
            sx={{
              width: 300,
            }}
            label="Password"
            id="password"
            required={true}
            type="text"
            value={user.password}
            onChange={(evt) => updateUser(evt)}
          />
          <FormControlLabel
            control={
              <Checkbox
                id="isDesigner"
                onChange={(evt) => updateUserCheckbox(evt)}
              />
            }
            label="Are they a Designer?"
          />
          <Button variant="contained" onClick={(evt) => handleRegister(evt)}>
            Submit
          </Button>
        </Stack>
      </Container>
    </>
  );
};
