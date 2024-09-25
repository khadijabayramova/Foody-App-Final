import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import CategoryTable from "../../../components/pages/category/CategoryTable/CategoryTable";
import Button from "../../../components/shared/Button/page";

export default function Category() {
  return (
    <>
      <AdminLayout>
        <div className="w-[82%]">
          <Button
            className="bg-btnColor rounded-xl p-2 text-center w-36"
            name="Category"
            add="Add Category"
            innertext="+ Add Restaurant"
          />

          <CategoryTable />
        </div>
      </AdminLayout>
    </>
  );
}
