import { useEffect, useState } from "react"



export const StepTwo = ( {setCurrentOrder, currentOrder, setDecedent, currentDecedent} ) => {





    return <>
        <fieldset>
            <label htmlFor="decedentName">Decedent Name</label>
            <input
                type="text"
                className="decedentName"
                value={currentDecedent.name}
                onChange={
                    (evt)=>{
                        const copy = {...currentDecedent}
                        copy.name = evt.target.value
                        setDecedent(copy)
                    }
                } />
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input
                    required autoFocus
                    type="date"
                    className="dob"
                    value={currentDecedent.dob}
                    onChange={
                        (evt)=>{
                            const copy = {...currentDecedent}
                        copy.dob = evt.target.value
                        setDecedent(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="dod">Date of Death:</label>
                <input
                    required autoFocus
                    type="date"
                    className="dod"
                    value={currentDecedent.dod}
                    onChange={
                        (evt)=>{
                            const copy = {...currentDecedent}
                        copy.dod = evt.target.value
                        setDecedent(copy)
                        }
                    } />
            </div>
        </fieldset>
    </>
}