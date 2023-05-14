import { Outlet, Route, Routes } from "react-router-dom";
import { CurrentOrders } from "../currentorders/CurrentOrders";
import { CreateOrder } from "../orderform/CreateOrder";
import { EditOrder } from "../orderform/EditOrder";
import { Home } from "../home/Home";
import { MyAccount } from "../myaccount/MyAccount";

export const CustomerViews = () => {
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
        <Route path="currentOrders/edit/:orderId" element={<EditOrder />} />
        <Route path="/myAccount" element={<MyAccount />} />

      </Route>
    </Routes>
  );
};
