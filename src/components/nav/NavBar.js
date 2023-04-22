import { CustomerNav } from "./CustomerNav"
import { DesignerNav } from "./DesignerNav"



export const NavBar = () => {
	
    const localPrintsUser = localStorage.getItem("prints_user")
    const printsUserObject = JSON.parse(localPrintsUser)
    
    if (printsUserObject.designer){
        return <DesignerNav />
    } else{
        return <CustomerNav />
        }
    }