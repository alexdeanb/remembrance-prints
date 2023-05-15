import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import "./Login.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch(
      `http://localhost:8088/users?email=${email}&password=${password}`
    )
      .then((res) => res.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "prints_user",
            JSON.stringify({
              id: user.id,
              designer: user.isDesigner,
            })
          );

          navigate("/");
        } else {
          window.alert("Invalid login");
        }
      });
  };

  return (<>
   
    <Container>
    <h1>Remembrance Prints</h1>
    <h2>Please sign in</h2>
      <Stack
      sx={{
        width: 300,
        mx: "auto",
        pt: 5,
      }}
      spacing={4}>

          <TextField
          sx={{width:300}}
          label="Email"
          required={true}
          autoFocus
          type="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          />
          <TextField
          sx={{width:300}}
          label="Password"
          required={true}
          autoFocus
          type="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          />
          <Button type="submit" onClick={handleLogin}>Sign in</Button>
      </Stack>
    </Container>
    </>
  );
};
