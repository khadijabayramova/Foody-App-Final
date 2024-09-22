import React from "react";
import Navbar from "../components/admin-navbar/page";
import Sidebar from "../components/admin-navbar/sidebar";

export default function index() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
      </div>
    </>
  );
}
