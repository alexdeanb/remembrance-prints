import { Card, CardActions, CardContent } from "@mui/material"
import { useEffect, useState } from "react";
import { MainItem } from "./MainItem";
import { ActiveByLocation } from "./ActiveByLocation";


export const Home = () => {


    const [orders, setOrders] = useState([]);

    useEffect(
        () =>{
        fetch(`http://localhost:8088/orders`)
        .then(response => response.json())
        .then((orderArray) => {
            setOrders(orderArray)
        })
        },
        []
    )




    return <>
        <Card sx={{width: 300, mx: "auto"}}>
            <CardContent>
                <MainItem orders={orders}></MainItem>
            </CardContent>
        </Card>
        <Card sx={{width: 300, mx: "auto"}}>
            <CardContent>
                <ActiveByLocation orders={orders} />
            </CardContent>
        </Card>
    
    </>
}