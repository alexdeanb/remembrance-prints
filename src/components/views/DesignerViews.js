import { Outlet, Route, Routes } from "react-router-dom";
import { CurrentOrders } from "../currentorders/CurrentOrders";
import { CreateOrder } from "../orderform/CreateOrder";
import { CompletedOrders } from "../completedorders/CompletedOrders";
import { Home } from "../home/Home";
import { AddAUser } from "../adduser/AddAUser";
import { Roster } from "../roster/Roster";
import { MyAccount } from "../myaccount/MyAccount";

export const DesignerViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Remembrance Prints</h1>

            <Outlet />
          </>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="orderform" element={<CreateOrder />} />
        <Route path="currentOrders" element={<CurrentOrders />} />
        <Route path="completedOrders" element={<CompletedOrders />} />
        <Route path="/newUser" element={<AddAUser />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/myAccount" element={<MyAccount />} />
      </Route>
    </Routes>
  );
};
