import React from "react";
import AdminLayout from "../components/layout/AdminLayout/AdminLayout";
import Additionalpage from "../components/shared/additionalpage/index";
import Orders from "./admin/orders/Orders";

export default function Home() {
  return (
    <>



      <AdminLayout>
         <Orders/>
      </AdminLayout>
    </>
  );
}
