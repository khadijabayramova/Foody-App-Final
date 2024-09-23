import React from "react";
import Category from "../pages/admin/category/page";

export default function Main() {
  return (
    <main className="flex-auto  bg-mainBg  rounded-xl mt-2 mr-2  overflow-auto ">
      <Navbar />
      <Category />
    </main>
  );
}
