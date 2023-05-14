import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { Login } from "./auth/Login"
import { AddAUser } from "./adduser/AddAUser"
import { NavBar } from "./nav/NavBar"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react"


export const RemembrancePrints = () => {

	const [colorMode,setColorMode] = useState(false)


	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
			  main: '#7e57c2',
			},
			secondary: {
			  main: '#8e24aa',
			},
		  },
	})
	const lightTheme = createTheme({
			palette: {
			  mode: 'light',
			  primary: {
				main: '#7e57c2',
			  },
			  secondary: {
				main: '#8e24aa',
			  },
			},
	})


	const currentTheme = () =>{
		if(!colorMode){
			return darkTheme
		} else{
			return lightTheme
		}
	}



	return (
	<ThemeProvider theme={currentTheme()}>
	<CssBaseline />
	<Routes>
		<Route path="/login" element={<Login />} />

		<Route path="*" element={
			<Authorized>
				<>
					<NavBar colorMode={colorMode} setColorMode={setColorMode}/>
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
	</ThemeProvider>
	)
}

