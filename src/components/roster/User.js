import { TableCell } from "@mui/material";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

export const User = ({ userObject, getAllUsers }) => {
  const localPrintsUser = localStorage.getItem("prints_user");
  const printsUserObject = JSON.parse(localPrintsUser);

  const isDesigner = () => {
    if (userObject.isDesigner) {
      return "Designer";
    } else {
      return "Director";
    }
  };

  const deleteUser = () => {
    if (
      userObject.id !== printsUserObject.id
    ) {
      return (
        <Button
          onClick={() => {
            fetch(`http://localhost:8088/users/${userObject.id}`, {
              method: "DELETE",
            }).then(getAllUsers);
          }}
        >
          Delete?
        </Button>
      );
    } else {
      <></>;
    }
  };

  return (
    <>
      <TableCell>{userObject?.name}</TableCell>
      <TableCell>{userObject?.email}</TableCell>
      <TableCell>{userObject?.password}</TableCell>
      <TableCell>{isDesigner()}</TableCell>
      <TableCell>{deleteUser()}</TableCell>
    </>
  );
};
