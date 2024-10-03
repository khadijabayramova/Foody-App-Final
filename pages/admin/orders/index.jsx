import React from "react";
import TableComponent from "../../../components/pages/TableComponent/TableComponent";
import Button from "../../../components/shared/Button/page";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import Image from "next/image";
import Link from "next/link";

function Orders() {
  const headers = [
    "ID",
    "Customer ID",
    "Time",
    "Delivery Address",
    "Amount",
    "Payment Methods",
    "Contact",
  ];

  const data = [
    {
      id: 1,
      customerId: 4545,
      time: "10:00",
      deliveryAddress: "30 Eve Street, 543 Evenue Road, Ny 87876",
      amount: 17.99,
      paymentMethods: "Cash on delivery",
      contact: 9944445566,
    },
    {
      id: 1,
      customerId: 4545,
      time: "10:00",
      deliveryAddress: "30 Eve Street, 543 Evenue Road, Ny 87876",
      amount: 17.99,
      paymentMethods: "Cash on delivery",
      contact: 9944445566,
    },
    {
      id: 1,
      customerId: 4545,
      time: "10:00",
      deliveryAddress: "30 Eve Street, 543 Evenue Road, Ny 87876",
      amount: 17.99,
      paymentMethods: "Cash on delivery",
      contact: 9944445566,
    },
  ];
  return (
    <AdminLayout>
      <div className="w-[82%]">
        <Button name="Orders" />

        <TableComponent headers={headers}>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-8 py-4 border-y ">
                <span className="border border-#DFE2E9 px-4 py-1 rounded-3xl">
                  {row.id}
                </span>
              </td>
              <td className="px-8 py-4 border-y ">
                <span className="border border-#DFE2E9 px-4 py-1 rounded-3xl">
                  {row.customerId}
                </span>
              </td>
              <td className="px-8 py-4 border-y ">{row.time}</td>
              <td className="px-8 py-4 border-y truncate max-w-10 ">
                {row.deliveryAddress}
              </td>
              <td className="px-8 py-4 border-y ">{row.amount}</td>
              <td className="px-8 py-4 border-y ">{row.paymentMethods}</td>
              <td className="px-8 py-4 border-y ">{row.contact}</td>
              <td className="px-8 py-4 border-y ">
                <div className="flex gap-2">
                  <Link href="/admin/orderHistory">
                    <Image
                      src="/adminImgs/editing/detail.svg"
                      width={24}
                      height={24}
                      alt="detail"
                    />
                  </Link>
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
      </div>
    </AdminLayout>
  );
}

export default Orders;
