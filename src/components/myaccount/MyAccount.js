import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export const MyAccount = () => {
  const localPrintsUser = localStorage.getItem("prints_user");
  const printsUserObject = JSON.parse(localPrintsUser);
  const [matchingUser, setMatchingUser] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8088/users/${printsUserObject.id}`)
      .then((response) => response.json())
      .then((user) => {
        setMatchingUser(user);
      });
  }, []);

  const updateUser = (evt) => {
    const copy = { ...matchingUser };
    copy[evt.target.id] = evt.target.value;
    setMatchingUser(copy);
  };

  const updateUserCheckbox = (evt) => {
    const copy = { ...matchingUser };
    copy[evt.target.id] = evt.target.checked;
    setMatchingUser(copy);
  };

  const designerCheck = () => {
    if (matchingUser.isDesigner) {
      return (
        <FormControlLabel
          control={
            <Checkbox
              id="isDesigner"
              checked
              onChange={(evt) => updateUserCheckbox(evt)}
            />
          }
          label="Are they a Designer?"
        />
      );
    } else {
      return (
        <FormControlLabel
          control={
            <Checkbox
              id="isDesigner"
              onChange={(evt) => updateUserCheckbox(evt)}
            />
          }
          label="Are they a Designer?"
        />
      );
    }
  };

  const registerNewUser = () => {
    return fetch(`http://localhost:8088/users/${matchingUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(matchingUser),
    }).then(setEdit(false));
  };

  const pageBody = () => {
    if (edit) {
      return (
        <>
          <Stack
            sx={{
              width: 300,
              mx: "auto",
              pt: 5,
            }}
            spacing={4}
          >
            <h1>User: {matchingUser.name}</h1>
            <TextField
              sx={{
                width: 300,
              }}
              label="Email"
              id="email"
              required={true}
              autoFocus
              type="text"
              value={matchingUser.email}
              onChange={(evt) => updateUser(evt)}
            />
            <TextField
              sx={{
                width: 300,
              }}
              label="Password"
              id="password"
              required={true}
              autoFocus
              type="text"
              value={matchingUser.password}
              onChange={(evt) => updateUser(evt)}
            />
            {designerCheck()}

            <Button onClick={() => registerNewUser()}>Submit</Button>
          </Stack>
        </>
      );
    } else {
      return (
        <>
          <Stack
            sx={{
              width: 300,
              mx: "auto",
              pt: 5,
            }}
            spacing={4}
          >
            <h1>User: {matchingUser.name}</h1>
            <h3>Email: {matchingUser.email}</h3>
            <h3>Password: {matchingUser.password}</h3>
            <h3>
              Current Role: {matchingUser.isDesigner ? "Designer" : "Director"}
            </h3>
            <Button onClick={() => setEdit(!edit)}>Edit</Button>
          </Stack>
        </>
      );
    }
  };

  return (
    <>
      <Container
        sx={{
          width: 500,
          mx: "auto",
          pt: 5,
        }}
      >
        {pageBody()}
      </Container>
    </>
  );
};
