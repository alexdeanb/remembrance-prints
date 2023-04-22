import { useState } from "react"
import { StepOne } from "./StepOne"


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



    return <>
    {
        {
            1: <StepOne setCurrentOrder={updateOrder} currentOrder={order}/>,
            2:<></>,
            3:<></>,
            4:<></>,
            5:<></>
            
        }[currentStep]
    }




    </>
}