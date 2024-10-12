import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import Button from "../../../components/shared/Button/page";
import RestarantCard from "../../../components/pages/restaurants/RestaurantCard/RestarantCard";
import { GlobalContext } from "../../../Context/globalcontext";
import { useContext } from "react";
import AddRestaurants from "../../../components/pages/addrestaurants";
export default function index() {
  const data = new Array(16).fill(1);
  const{openrestaurants,setOpenrestaurants}=useContext(GlobalContext)
  return (
    <AdminLayout>
      <div className="w-[82%]">
        <Button
         onClick={()=>setOpenrestaurants(true)}
          className="bg-btnColor rounded-xl p-2 text-center  w-40 font-bold"
          name="Restaurants"
          innertext="+ Add Restaurant"
        />

        <div className="grid grid-cols-4 gap-4 mt-12">
          {data.map(() => (
            <RestarantCard name="papajons" category="fast food" />
          ))}
        </div>

        {openrestaurants && <AddRestaurants />}
      </div>
    </AdminLayout>
  );
}
