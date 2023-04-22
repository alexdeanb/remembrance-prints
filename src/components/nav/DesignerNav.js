import { Link, useNavigate } from "react-router-dom"


export const DesignerNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">

            
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("prints_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}




