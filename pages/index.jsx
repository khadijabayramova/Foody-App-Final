import React from "react";
import Navbar from "../components/layout/AdminLayout/Navbar/page";
import Sidebar from "../components/layout/AdminLayout/Sidebar/sidebar";
import Category from "./admin/category";
import AdminLayout from "../components/layout/AdminLayout/AdminLayout";

export default function Home() {
  return (
    <>
      <AdminLayout>
        <p>Home</p>
      </AdminLayout>
    </>
  );
}
