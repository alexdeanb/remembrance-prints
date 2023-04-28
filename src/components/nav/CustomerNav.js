import { Link, useNavigate } from "react-router-dom"



export const CustomerNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <Link className="navbar__item" to="/orderform">
                <li className="navbar__linkactive">
                    New Order
                </li>
            </Link>
            <Link className="navbar__item" to="/currentOrders">
                <li className="navbar__linkactive">
                    Current Orders
                </li>
            </Link>

            
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("prints_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}




