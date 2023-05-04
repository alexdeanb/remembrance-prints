import { Outlet, Route, Routes } from "react-router-dom";
import { CurrentOrders } from "../currentorders/CurrentOrders";
import { CreateOrder } from "../orderform/CreateOrder";
import { EditOrder } from "../orderform/EditOrder";

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
        <Route path="orderform" element={<CreateOrder />} />
        <Route path="currentOrders" element={<CurrentOrders />} />
        <Route path="currentOrders/edit/:orderId" element={<EditOrder />} />
      </Route>
    </Routes>
  );
};
