import React from "react";
import TableComponent from "../../../components/pages/TableComponent/TableComponent";
import Button from "../../../components/shared/Button/page";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
function Orders() {
  return (
    <AdminLayout>
      <div className="w-full">
        <Button name="Orders" />

        <TableComponent />
      </div>
    </AdminLayout>
  );
}

export default Orders;
