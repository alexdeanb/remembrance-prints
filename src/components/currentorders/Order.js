import { TableCell } from "@mui/material";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, FormControl } from "@mui/material";

export const Order = ({ ticketObject }) => {
  const localPrintsUser = localStorage.getItem("prints_user");
  const printsUserObject = JSON.parse(localPrintsUser);

  const [locations, setLocations] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      fetch("http://localhost:8088/users")
        .then((response) => response.json())
        .then((userArray) => {
          setUsers(userArray);
        });

      fetch("http://localhost:8088/locations")
        .then((response) => response.json())
        .then((locationsArray) => {
          setLocations(locationsArray);
        });
    },
    [] // When this array is empty, you are observing initial component state
  );

  const matchingDesigner = users.find(
    (user) => user.id === ticketObject.designer
  );

  const hasDeleteButton = () => {
    if(ticketObject.customerId === printsUserObject.id){
      return <Button onClick={()=>{
        fetch(`http://localhost:8088/orders/${ticketObject.id}`,{
          method: "DELETE"
        }) 
      }}>Delete?</Button>
    }else{
      <></>
    }
  }



  const hasDesigner = () => {
    if (!ticketObject.designer) {
      return <>
      No Designer

      </>;
    } else {
      return matchingDesigner?.name;
    }
  };




  const matchingCustomer = users.find(
    (user) => user.id === ticketObject.customerId
  );
  const matchingLocation = locations.find(
    (location) => location.id === ticketObject.locationId
  );

  return (
    <>
      <TableCell>{matchingCustomer?.name}</TableCell>
      <TableCell>{matchingLocation?.name}</TableCell>
      <TableCell>{ticketObject?.caseNumber}</TableCell>
      <TableCell>{ticketObject?.dateOrdered}</TableCell>
      <TableCell>{ticketObject?.dateNeeded}</TableCell>
      <TableCell>{hasDesigner()}{hasDeleteButton()}</TableCell>
    </>
  );
};
