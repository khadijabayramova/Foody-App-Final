import React, { useContext } from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import Productscard from "../../../components/pages/productscard/index";
import Dropdown from "../../../components/shared/Dropdown/index";
import Popup from "../../../components/shared/Popup/index";
import { GlobalContext } from "../../../Context/globalcontext";

export default function Productspage() {
  const { openPopup } = useContext(GlobalContext);
  const data = new Array(15).fill(1); // Sample data

  return (
    <AdminLayout>
      <div className="w-[82%]">
        <Dropdown name="Products" selection="Sea Foods" />

        {/* Adjusted Scrollable Container */}
        <div className="overflow-y-auto max-h-[400px] mt-14">
          {" "}
          {/* Fixed max height */}
          <div className="grid grid-cols-5 gap-x-10 gap-y-9">
            {data.map((_, index) => (
              <Productscard
                key={index}
                title="Margarita"
                restaurant="papajons"
                price="16.9$"
              />
            ))}
          </div>
        </div>

        {openPopup && <Popup />}
      </div>
    </AdminLayout>
  );
}
