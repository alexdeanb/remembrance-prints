import { Outlet, Route, Routes } from "react-router-dom"
import { OrderFormStepper } from "../../orderform/OrderFormStepper"



export const CustomerViews = () => {
		return (
			<Routes>
				<Route path="/" element={
					<>
						<h1>Remembrance Prints</h1>
	
						<Outlet />
					</>
				}>

					<Route path="orderform" element={ <OrderFormStepper /> } />
				</Route>
			</Routes>
		)
	}
