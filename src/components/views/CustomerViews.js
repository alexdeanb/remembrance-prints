import { Outlet, Route, Routes } from "react-router-dom";
import { CreateOrder } from "../orderform/CreateOrder";
import { EditOrder } from "../orderform/EditOrder";
import { Home } from "../home/Home";
import { MyAccount } from "../myaccount/MyAccount";
import { OrderViewer } from "../orders/OrderViewer";

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
        <Route path="orders" element={<OrderViewer />} />
        <Route path="currentOrders/edit/:orderId" element={<EditOrder />} />
        <Route path="/myAccount" element={<MyAccount />} />

      </Route>
    </Routes>
  );
};
