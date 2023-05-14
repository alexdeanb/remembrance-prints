import { useState, useEffect } from "react";
import { User } from "./User";
import {
  Button,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Roster = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  const getAllUsers = () => {
    fetch(`http://localhost:8088/users`)
      .then((response) => response.json())
      .then((usersArray) => {
        setUsers(usersArray);
      });
  };

  const newUserNav = () => {
   navigate("/newUser")
  }


    useEffect(
        () =>{
            getAllUsers()
        },
        []
    )

    return (
        <>
        <h1>Users</h1>
          <div>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Designer</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                {users.map((userObject) => (
                <TableRow key={`userObject--${userObject.id}`}>
                  <User userObject={userObject} getAllUsers={getAllUsers}/>
                </TableRow>
              ))}
              </Table>
            </TableContainer>
            <Button onClick={newUserNav}>Add User</Button>
          </div>

        </>
      );
};