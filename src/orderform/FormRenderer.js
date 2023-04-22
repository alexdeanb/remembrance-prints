import { useState, useEffect } from "react"
import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"


export const FormRenderer = ( {currentStep} ) => {
    const [order,updateOrder] = useState({
        designerId: 0,
        customerId: 0,
        locationId: 0,
        dateOrdered: "",
        dateNeeded: "",
        caseNumber: 0,
        decedentId: 0
    })

    const [decedent, updateDecedent] = useState({
        id: 0,
        name: "",
        dob: "",
        dod: ""
    })


    useEffect(
        () => {
            fetch ('http://localhost:8088/decedents')
            .then(response => response.json())
            .then((decedentArray) => {
                const copy = {...decedent}
                copy.id = decedentArray.length + 1
                updateDecedent(copy)
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
            3:<></>,
            4:<></>,
            5:<></>
            
        }[currentStep]
    }




    </>
}