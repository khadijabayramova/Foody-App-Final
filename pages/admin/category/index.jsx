import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import Button from "../../../components/shared/Button/page";
import TableComponent from "../../../components/pages/TableComponent/TableComponent";
import Image from "next/image";
import AddCategory from "../../../components/pages/addcategory";
import { GlobalContext } from "../../../Context/globalcontext";
import { useContext } from "react";
export default function Category() {
  const headers = ["ID", "Image", "Name", "Slug"];

  const data = [
    {
      id: 1,
      Image: "/adminImgs/admin-category/fastfood.svg",
      name: "Fries",
      slug: "yummy pizza",
    },
    {
      id: 1,
      Image: "/adminImgs/admin-category/fastfood.svg",
      name: "Fries",
      slug: "yummy pizza",
    },
    {
      id: 1,
      Image: "/adminImgs/admin-category/fastfood.svg",
      name: "Fries",
      slug: "yummy pizza",
    },
  ];
  const { opencategory, setOpenCategory } = useContext(GlobalContext);
  return (
    <>
      <AdminLayout>
        <div className="w-[82%]">
          <Button
            className="bg-btnColor rounded-xl p-2 text-center w-40 font-bold "
            name="Category"
            add="Add Category"
            innertext="+ Add Restaurant"
            onClick={() => setOpenCategory(true)}
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
                  <Image src={row.Image} width={40} height={40} />
                </td>
                <td className="px-8 py-4 border-y ">{row.name}</td>
                <td className="px-8 py-4 border-y truncate max-w-10 ">
                  {row.slug}
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
          {opencategory && <AddCategory/>}
        </div>
      </AdminLayout>
    </>
  );
}
