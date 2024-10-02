import React, { useContext } from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import Productscard from "../../../components/pages/productscard/index";
import Dropdown from "../../../components/shared/Dropdown/index";
import Popup from "../../../components/shared/Popup/index";
import { GlobalContext } from "../../../Context/globalcontext";

export default function Productspage() {
  const { openPopup } = useContext(GlobalContext);
  const data = new Array(15).fill(1);

  return (
    <AdminLayout>
      <div className="w-[82%]">
        <Dropdown name="Products" selection="Sea Foods" />
        <div className="grid grid-cols-5 grid-rows-3 gap-x-10 gap-y-9 mt-14 ">
          {data.map((_, index) => (
            <Productscard
              key={index}
              title="Margarita"
              restaurant="papajons"
              price="16.9$"
            />
          ))}
        </div>

        {openPopup && <Popup />}
      </div>
    </AdminLayout>
  );
}
