import { TableCell, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export const Order = ({ ticketObject, getAllOrders }) => {
  const localPrintsUser = localStorage.getItem("prints_user");
  const printsUserObject = JSON.parse(localPrintsUser);

  const [locations, setLocations] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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

    fetch("http://localhost:8088/products")
      .then((response) => response.json())
      .then((productArray) => {
        setProducts(productArray);
      });
  }, []);

  const matchingDesigner = users.find(
    (user) => user.id === ticketObject.designer
  );

  const hasDeleteButton = () => {
    if (
      ticketObject.customer === printsUserObject.id &&
      ticketObject.dateCompleted === ""
    ) {
      return (
        <Button
          onClick={() => {
            fetch(`http://localhost:8088/orders/${ticketObject.id}`, {
              method: "DELETE",
            }).then(getAllOrders);
          }}
        >
          Delete?
        </Button>
      );
    } else {
      <></>;
    }
  };

  const updateDesigner = () => {
    fetch(`http://localhost:8088/orders/${ticketObject.id}`)
      .then((response) => response.json())
      .then((data) => {
        data.designer = printsUserObject.id;
        fetch(`http://localhost:8088/orders/${ticketObject.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(getAllOrders);
      });
  };

  const updateCompletion = () => {
    fetch(`http://localhost:8088/orders/${ticketObject.id}`)
      .then((response) => response.json())
      .then((data) => {
        data.completed = true;
        data.dateCompleted = dayjs().format("YYYY/MM/DD");
        fetch(`http://localhost:8088/orders/${ticketObject.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(getAllOrders);
      });
  };

  const completeOrder = () => {
    if (
      ticketObject.designer === printsUserObject.id &&
      ticketObject.completed === false
    ) {
      return <Button onClick={() => updateCompletion()}>Complete</Button>;
    } else {
      return;
    }
  };

  const claimTicket = () => {
    if (!ticketObject.designer && printsUserObject.designer) {
      return <Button onClick={() => updateDesigner()}>Claim</Button>;
    } else {
      return;
    }
  };

  const hasDesigner = () => {
    if (!ticketObject.designer) {
      return <>No Designer</>;
    } else {
      return matchingDesigner?.name;
    }
  };

  const editOrder = (order) => {
    if (
      ticketObject.customer === printsUserObject.id &&
      !printsUserObject.designer &&
      ticketObject.dateCompleted === ""
    ) {
      return (
        <>
          <Button
            onClick={() => {
              navigate(`edit/${order.id}`);
            }}
          >
            Edit
          </Button>
        </>
      );
    } else <></>;
  };

  const matchingCustomer = users.find(
    (user) => user.id === ticketObject.customer
  );
  const matchingLocation = locations.find(
    (location) => location.id === ticketObject.locationId
  );

  const completedOrNeeded = () => {
    if (ticketObject.dateCompleted !== "") {
      return ticketObject.dateCompleted;
    } else {
      return ticketObject.dateNeeded;
    }
  };

  return (
    <>
      <TableCell>{matchingCustomer?.name}</TableCell>
      <TableCell>{matchingLocation?.name}</TableCell>
      <Tooltip
        placement="left"
        arrow
        title={
          <>
            <li>
              {ticketObject.mainItem}: {ticketObject.mainItemQty}
            </li>
            {products.map((product) => {
              if (ticketObject[product.value] > 0) {
                return (
                  <>
                    <li>
                      {product.name}: {ticketObject[product.value]}
                    </li>
                  </>
                );
              }
            })}
          </>
        }
      >
        <TableCell>{ticketObject?.caseNumber}</TableCell>
      </Tooltip>
      <TableCell>{ticketObject?.dateOrdered}</TableCell>
      <TableCell>{completedOrNeeded()}</TableCell>
      <TableCell>
        {hasDesigner()}
        {hasDeleteButton()}
        {editOrder(ticketObject)}
        {claimTicket()}
        {completeOrder()}
      </TableCell>
    </>
  );
};
