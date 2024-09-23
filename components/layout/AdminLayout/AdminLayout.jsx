import React from "react";
import Navbar from "./Navbar/page";
import Sidebar from "./Sidebar/sidebar";

export default function AdminLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
