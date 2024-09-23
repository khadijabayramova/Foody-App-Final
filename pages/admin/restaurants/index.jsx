import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import AddBtn from "../../../components/shared/Button/page";
import RestarantCard from "../../../components/pages/restaurants/RestaurantCard/RestarantCard";

export default function index() {
  const data = new Array(16).fill(1);

  return (
    <AdminLayout>
      <div className="w-[82%]">
        <AddBtn name="Restaurants" add="Add Restaurant" />

        <div className="grid grid-cols-4 gap-4 mt-12">
          {data.map((item) => (
            <RestarantCard name="papajons" />
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
