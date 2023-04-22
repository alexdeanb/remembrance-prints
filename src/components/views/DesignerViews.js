import { Outlet, Route, Routes } from "react-router-dom"



export const DesignerViews = () => {
		return (
			<Routes>
				<Route path="/" element={
					<>
						<h1>Remembrance Prints</h1>
	
						<Outlet />
					</>
				}>
				</Route>
			</Routes>
		)
	}
