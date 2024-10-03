import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import Button from "../../../components/shared/Button/page";
import TableComponent from "../../../components/pages/tablecomp/TableComponent";

export default function OrderHistoryPage() {
  const headers = [
    "ID",
    "Customer ID",
    "Time",
    "Delivery Address",
    "Amount",
    "Payment Methods",
    "Contact",
  ];

  console.log(headers, "heaaaaad");

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
      id: 5,
      customerId: 4545,
      time: "10:00",
      deliveryAddress: "30 Eve Street, 543 Evenue Road, Ny 87876",
      amount: 17.99,
      paymentMethods: "Cash on delivery",

      contact: 9944445566,
    },
    {
      id: 4,
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
        <Button name="History" />

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
              <td className="px-8 py-4 border-y ">{row.deliveryAddress}</td>
              <td className="px-8 py-4 border-y ">{row.amount}</td>
              <td className="px-8 py-4 border-y ">{row.paymentMethods}</td>
              <td className="px-8 py-4 border-y ">{row.contact}</td>
            </tr>
          ))}
        </TableComponent>
      </div>
    </AdminLayout>
  );
}
