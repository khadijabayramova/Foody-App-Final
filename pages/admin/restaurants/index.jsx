import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import Button from "../../../components/shared/Button/page.jsx";
import RestarantCard from "../../../components/pages/restaurants/RestaurantCard/RestarantCard";

export default function index() {
  const data = new Array(16).fill(1);

  return (
    <AdminLayout>
      <div className="w-[82%]">
        <Button name="Restaurants" add="Add Restaurant" />

        <div className="grid grid-cols-4 gap-4 mt-12">
          {data.map((item) => (
            <RestarantCard name="papajons" />
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
