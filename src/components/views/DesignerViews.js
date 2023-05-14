import { Outlet, Route, Routes } from "react-router-dom";
import { CreateOrder } from "../orderform/CreateOrder";
import { Home } from "../home/Home";
import { AddAUser } from "../adduser/AddAUser";
import { Roster } from "../roster/Roster";
import { MyAccount } from "../myaccount/MyAccount";
import { OrderViewer } from "../orders/OrderViewer";

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
        <Route path="orders" element={<OrderViewer />} />
        <Route path="/newUser" element={<AddAUser />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/myAccount" element={<MyAccount />} />
      </Route>
    </Routes>
  );
};
