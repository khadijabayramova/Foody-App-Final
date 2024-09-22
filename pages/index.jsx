import React from "react";
import Navbar from "../components/admin-navbar/page";
import Sidebar from "../components/admin-navbar/sidebar";
import Category from "./admin/category/page";

export default function index() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <Category />
      </div>
    </>
  );
}
