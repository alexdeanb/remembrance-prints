import { useState, useEffect } from "react"
import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"
import { StepThree } from "./StepThree"
import dayjs from 'dayjs';


export const FormRenderer = ( {currentStep} ) => {

    const localPrintsUser = localStorage.getItem("prints_user")
    const printsUserObject = JSON.parse(localPrintsUser)

    const [order,updateOrder] = useState({
        designerId: 0,
        customerId: printsUserObject.id,
        locationId: 0,
        dateOrdered: dayjs().format('YYYY/MM/DD'),
        dateNeeded: dayjs().format('YYYY/MM/DD'),
        caseNumber: 0,
        decedentId: 0,
        id: 0,
        theme: ""
    })

    const [decedent, updateDecedent] = useState({
        id: 0,
        name: "",
        dob: dayjs().format('YYYY/MM/DD'),
        dod: dayjs().format('YYYY/MM/DD')
    })

    const [products, updateOrderProducts] = useState([])
    const [pastOrderProducts, setPastOrderProducts] = useState([])


    useEffect(
        () => {
            fetch ('http://localhost:8088/decedents')
            .then(response => response.json())
            .then((decedentArray) => {
                const copy = {...decedent}
                copy.id = decedentArray.length + 1
                updateDecedent(copy)
            })
            
            fetch ('http://localhost:8088/orders')
            .then(response => response.json())
            .then((orderArray) => {
                const copy = {...order}
                copy.id = orderArray.length + 1
                updateOrder(copy)
            })

            fetch ('http://localhost:8088/orderProducts')
            .then(response => response.json())
            .then((orderArray) => {
                setPastOrderProducts(orderArray)
            })

        },
        [] // When this array is empty, you are observing initial component state
    )


    useEffect(
        () =>{
            const copy = {...order}
            copy.decedentId = decedent.id
            updateOrder(copy)
        },
        [decedent]
    )




    return <>
    {
        {
            1: <StepOne setCurrentOrder={updateOrder} currentOrder={order}/>,
            2: <StepTwo setDecedent={updateDecedent} currentDecedent={decedent}/>,
            3: <StepThree addProductToOrder={updateOrderProducts} currentOrderProducts={products} currentOrder={order} previouslyOrdered={pastOrderProducts}/>,
            4:<></>,
            5:<></>
            
        }[currentStep]
    }




    </>
}