import React from "react";
import Tbody from "./tbody/Tbody";

function TableComponent() {
  const data = new Array(15).fill(1);
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border text-black bg-bgwt">
        <thead >
          <tr>
            {/* Define your table headings */}
            <th className="border-b  px-4 py-4">ID</th>
            <th className="border-b px-4 py-4"> Customer ID</th>
            <th className="border-b px-4 py-4">Time</th>
            <th className="border-b px-4 py-4">Delivery Address</th>
            <th className="border-b px-4 py-4">Amount</th>
            <th className="border-b px-4 py-4">Payment Method</th>
            <th className="border-b px-4 py-4">Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map(() => (
            <Tbody />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
