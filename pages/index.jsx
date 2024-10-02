import React from "react";
import AdminLayout from "../components/layout/AdminLayout/AdminLayout";
import Popup from "../components/shared/Popup";
export default function Home() {
  return (
    <>
      <AdminLayout>
        <Popup/>
      </AdminLayout>
    </>
  );
}
