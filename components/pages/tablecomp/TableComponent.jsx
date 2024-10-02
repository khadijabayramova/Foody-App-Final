import React from "react";
import Tbody from "./tbody/Tbody";

function TableComponent() {
  const data = new Array(15).fill(1);
  return (
    <div className="overflow-y-auto h-[61vh] mt-4">
      <table className="min-w-full border text-black bg-bgwt">
        <thead>
          <tr>
            {/* Define your table headings */}
            <th className="px-6 py-4 text-center">ID</th>
            <th className="px-6 py-4 text-center"> Customer ID</th>
            <th className="px-6 py-4 text-center">Time</th>
            <th className="px-6 py-4 text-center">Delivery Address</th>
            <th className="px-6 py-4 text-center">Amount</th>
            <th className="px-6 py-4 text-center">Payment Method</th>
            <th className="px-6 py-4 text-center">Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map(() => (
            <Tbody
              id="12122"
              customerId="12122"
              time="12:00"
              deliveryAddress="123 Main St, Anytown USA           
              "
              amount="2000"
              paymentMethods="Cash"
              contact="1234567890"
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
