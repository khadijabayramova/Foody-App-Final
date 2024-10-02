import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout/AdminLayout";
import OrderHistoryTable from "../../../components/pages/orders/OrderHistory/OrderHistoryTable";
import Button from "../../../components/shared/Button/page";

export default function OrderHistoryPage() {
  const data = new Array(16).fill(1);

  return (
    <AdminLayout>
      <div className="w-[82%]">
        <Button name="History" />

        <div className="overflow-y-auto h-[61vh] mt-4 ">
          <table class="min-w-full bg-white text-black border   ">
            <thead>
              <tr>
                <th class="px-4 py-4 text-start">ID</th>
                <th class="px-4 py-4 text-start"> Customer ID</th>
                <th class="px-4 py-4 text-start">Time</th>
                <th class="px-4 py-4 text-start">Delivery Address</th>
                <th class="px-4 py-4 text-start">Amount</th>
                <th class="px-4 py-4 text-start">Payment Method</th>
                <th class="px-4 py-4 text-start">Contact</th>
              </tr>
            </thead>

            {data.map(() => (
              <OrderHistoryTable
                id="12122"
                customerId="12122"
                time="12:00"
                deliveryAddress="123 Main St, Anytown USA"
                amount="2000"
                paymentMethods="Cash"
                contact="1234567890"
              />
            ))}
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
