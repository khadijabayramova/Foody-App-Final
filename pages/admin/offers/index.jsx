import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import Button from "../../../components/shared/Button/page";
import TableComponent from "../../../components/pages/TableComponent/TableComponent";
import Link from "next/link";
import Image from "next/image";
import { GlobalContext } from "../../../Context/globalcontext";
import { useContext } from "react";
import AddOffers from "../../../components/pages/addoffers";

export default function Offers() {
  const headers = ["ID", "Image", "Title", " Descrtiption"];

  const data = [
    {
      id: 1,
      Image: "/adminImgs/admin-category/fastfood.svg",
      title: "Do you like Pizza at Pap...",

      description: "30 Eve Street, 543 Evenue Road, Ny 87876",
    },
    {
      id: 1,
      Image: "/adminImgs/admin-category/fastfood.svg",
      title: "Do you like Pizza at Pap...",
      description: "30 Eve Street, 543 Evenue Road, Ny 87876",
    },
    {
      id: 1,
      Image: "/adminImgs/admin-category/fastfood.svg",
      title: "Do you like Pizza at Pap...",

      description: "30 Eve Street, 543 Evenue Road, Ny 87876",
    },
  ];
  const { openoffers, setOpenoffers } = useContext(GlobalContext);

  return (
    <AdminLayout>
      <div className="w-[82%]">
        <Button
          className="bg-btnColor rounded-xl p-2 text-center w-40 font-bold"
          name="Offers"
          add="Add Offer"
          innertext="+ Add Offer"
          onClick={() => setOpenoffers(true)}
        />

        <TableComponent headers={headers}>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-8 py-4 border-y ">
                <span className="border border-#DFE2E9 px-4 py-1 rounded-3xl">
                  {row.id}
                </span>
              </td>
              <td className="px-8 py-4 border-y ">
                <Image src={row.Image} width={40} height={40} alt="image" />
              </td>
              <td className="px-8 py-4 border-y truncate max-w-10">
                {row.title}
              </td>
              <td className="px-8 py-4 border-y truncate max-w-10">
                {row.description}
              </td>
              <td className="px-8 py-4 border-y ">
                <div className="flex gap-2">
                  <button>
                    <Image
                      src="/adminImgs/editing/edit.svg"
                      width={20}
                      height={20}
                      alt="edit"
                    />
                  </button>
                  <button>
                    <Image
                      src="/adminImgs/editing/delete.svg"
                      width={20}
                      height={20}
                      alt="delete"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </TableComponent>
        {openoffers && <AddOffers />}
      </div>
    </AdminLayout>
  );
}
