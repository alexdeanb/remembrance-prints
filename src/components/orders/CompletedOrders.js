import { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Order } from "./Order";

export const CompletedOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

 const getAllOrders = () => {
  fetch("http://localhost:8088/orders")
  .then((response) => response.json())
  .then((orderArray) => {
    setOrders(orderArray);
  });
 }


useEffect(
    () =>{
        getAllOrders()
    },
    []
)

 useEffect(
  () =>{
    
    const filterOrders = structuredClone(orders).filter((order) => order.completed === true)

    setFilteredOrders(filterOrders)
  },
  [orders]
 )




  return (
    <>
    <h1>Completed Orders</h1>
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Case Number</TableCell>
                <TableCell>Date Ordered</TableCell>
                <TableCell>Date Completed</TableCell>
                <TableCell>Designer</TableCell>
              </TableRow>
              </TableHead>
              {filteredOrders.map((order) => (
                <TableRow key={`order--${order.id}`}>
                  <Order ticketObject={order}getAllOrders={getAllOrders}/>
                </TableRow>
              ))}

          </Table>
        </TableContainer>
      </div>
    </>
  );
};
