import React from "react";
import AddBtn from "../../../components/shared/Button/page";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import CategoryTable from "../../../components/pages/category/CategoryTable/CategoryTable";

export default function Category() {
  return (
    <>
      <AdminLayout>
        <div className="w-[82%]">
          <AddBtn name="Category" add="Add Category" />

          <CategoryTable />
        </div>
      </AdminLayout>
    </>
  );
}
