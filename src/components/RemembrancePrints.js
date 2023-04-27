import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';

export const RemembrancePrints = () => {

	const darkTheme = createTheme({
		palette: {
		  mode: 'dark',
		},
	  });



	return (
	<ThemeProvider theme={darkTheme}>
	<CssBaseline />
	<Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<NavBar />
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
	</ThemeProvider>
	)
}

