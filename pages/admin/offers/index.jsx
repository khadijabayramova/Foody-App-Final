import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import OffersTable from "../../../components/pages/offers/OffersTable/OffersTable";
import Button from "../../../components/shared/Button/page";

export default function Offers() {
  const data = new Array(16).fill(1);

  return (
    <AdminLayout>
      <div className="w-[82%]">
        <Button
          className="bg-btnColor rounded-xl p-2 text-center w-40 font-bold"
          name="Offers"
          add="Add Offer"
          innertext="+ Add Offer"
        />
        <div className="overflow-y-auto h-[61vh] mt-4 ">
          <table class="min-w-full bg-white text-black border   ">
            <thead>
              <tr>
                <th class="px-8 py-4 text-start">Id</th>
                <th class="px-8 py-4 text-start">Image</th>
                <th class="px-8 py-4 text-start">Title</th>
                <th class="px-8 py-4 text-start">Descriptions</th>
              </tr>
            </thead>
            {data.map(() => (
              <OffersTable
                id="12122"
                image="/adminImgs/admin-category/fastfood.svg"
                title="fast food asdasdasdasdasdasdasdss asdasdasdasdasdasdasdssasdasdasdasdasdasdasdss"
                desc="fastfood asdasdasdasdasdasdasdssasdasdasdasdasdasdasdss"
              />
            ))}
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
