import { useEffect, useState } from "react"



export const StepOne = ( {setCurrentOrder, currentOrder} ) => {

    const [locations, setLocations] = useState([])


    useEffect(
        () => {
            fetch ('http://localhost:8088/locations')
            .then(response => response.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
            
        },
        [] // When this array is empty, you are observing initial component state
    )



    return <>
         <fieldset>
            <div className="form-group">
                <label htmlFor="newOrder_location">Location:</label>
                <select
                    className="newOrder_location_Select"
                    onChange={
                        (evt)=>{
                            const copy = {...currentOrder}
                            copy.locationId = parseInt(evt.target.value)
                            setCurrentOrder(copy)
                        }
                    }
                    >
                    <option key="0" value = "0">Select a location...</option>
                {
                    locations.map(
                        (location) => {
                            return <option key ={location.id} value={location.id}>{location.name}</option>
                        }
                    )
                }
                </select>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="caseNumber">Case Number:</label>
                <input
                    required autoFocus
                    type="number"
                    className="caseNumber"
                    value={currentOrder.caseNumber}
                    onChange={
                        (evt)=>{
                            const copy = {...currentOrder}
                            copy.caseNumber = parseInt(evt.target.value)
                            setCurrentOrder(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="dateNeeded">Date Needed:</label>
                <input
                    required autoFocus
                    type="date"
                    className="dateNeeded"
                    value={currentOrder.dateNeeded}
                    onChange={
                        (evt)=>{
                            const copy = {...currentOrder}
                            copy.dateNeeded = evt.target.value
                            setCurrentOrder(copy)
                        }
                    } />
            </div>
        </fieldset>
    </>
}