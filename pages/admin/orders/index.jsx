import React, { useState, useEffect } from "react";
import TableComponent from "../../../components/pages/TableComponent/TableComponent";
import Button from "../../../components/shared/Button/page";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import TableRow from "../../../components/pages/tablecomp/TableRow/TableRow";
import { getAllOrders } from "../../../services/axios";
function Orders() {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     let resp = await getAllOrders();
  //     if (resp) {
  //       console.log(resp);
  //     }
  //   })();
  // }, []);

  return (
    <AdminLayout>
      <div className="w-full">
        <Button name="Orders" />

        <TableComponent
          headers={[
            "ID",
            "Customer ID",
            "Time",
            "Delivery Address",
            "Payment Method",
            "Amount",
            "Contact",
            "",
          ]}
        >
          <TableRow
            data={{
              id: 1,
              customer_id: 4545,
              created: "10:00",
              delivery_address: "30 Eve Street, 543 Evenue Road, Ny 87876",
              amount: 17.99,
              payment_method: "Cash on delivery",
              contact: "+9944445566",
            }}
            handleDelete={() => {
              console.log("delete");
            }}
          />
        </TableComponent>
      </div>
    </AdminLayout>
  );
}

export default Orders;
