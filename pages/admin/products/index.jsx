import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import Productscard from "../../../components/pages/productscard/index";
import Button from "../../../components/shared/Button/page";

export default function Productspage() {
  return (
    <AdminLayout>
      <div className="w-[82%]  ">
        <Button name="Products" />
        <div className="grid grid-cols-5 grid-rows-3 gap-x-10 gap-y-9 mt-14 ">
          <Productscard />
          <Productscard />
          <Productscard />
          <Productscard />
          <Productscard />
          <Productscard />
          <Productscard />
          <Productscard />
          <Productscard />
          <Productscard />
        </div>
      </div>
    </AdminLayout>
  );
}
