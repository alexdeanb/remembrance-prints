import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Order } from "./Order";



export const CurrentOrders = () => {
    
    const [orders, setOrders] = useState([])

    useEffect(
        () => {
          fetch("http://localhost:8088/orders")
            .then((response) => response.json())
            .then((orderArray) => {
              setOrders(orderArray);
            });
        },
        [] // When this array is empty, you are observing initial component state
      );


        return<>
        <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Customer</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Case Number</TableCell>
                        <TableCell>Date Ordered</TableCell>
                        <TableCell>Date Needed</TableCell>
                        <TableCell>Designer</TableCell>
                    </TableRow>
                    {orders.map((order) => (
                        <TableRow key={`order--${order.id}`}>
                            <Order ticketObject={order} />
                        </TableRow>


                    ))}
                </TableHead>
            </Table>
        </TableContainer>

        </div>
        </>




    }
