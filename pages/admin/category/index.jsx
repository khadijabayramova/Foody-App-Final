import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import CategoryTable from "../../../components/pages/category/CategoryTable/CategoryTable";
import Button from "../../../components/shared/Button/page";

export default function Category() {
  const data = new Array(16).fill(1);

  return (
    <>
      <AdminLayout>
        <div className="w-[82%]">
          <Button
            className="bg-btnColor rounded-xl p-2 text-center w-40 font-bold "
            name="Category"
            add="Add Category"
            innertext="+ Add Restaurant"
          />

          <div className="overflow-y-auto h-[61vh] mt-4 ">
            <table class="min-w-full bg-white text-black border   ">
              <thead>
                <tr>
                  <th class="px-8 py-4 text-start">Id</th>
                  <th class="px-8 py-4 text-start">Image</th>
                  <th class="px-8 py-4 text-start">Name</th>
                  <th class="px-8 py-4 text-start">Slug</th>
                </tr>
              </thead>
              {data.map(() => (
                <CategoryTable id="12122" name="fast food" slug="fastfood" />
              ))}
            </table>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
