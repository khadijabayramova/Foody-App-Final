import React from "react";
import Navbar from "../components/admin-navbar";
import Login from "./admin/login";

export default function index() {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
}
