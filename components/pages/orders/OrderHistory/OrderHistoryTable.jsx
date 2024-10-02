import Image from "next/image";
import React from "react";

export default function OrderHistoryTable(props) {
  return (
    <tbody>
      <tr>
        <td class="px-8 py-4 border-y ">{props.id}</td>
        <td class="px-4 py-2 border-y ">{props.customerId}</td>
        <td class="px-8 py-4 border-y ">{props.time}</td>
        <td class="px-8 py-4 border-y">{props.deliveryAddress}</td>

        <td class="px-8 py-4 border-y ">{props.amount}</td>
        <td class="px-8 py-4 border-y ">{props.paymentMethods}</td>
        <td class="px-8 py-4 border-y ">{props.contact}</td>
      </tr>
    </tbody>
  );
}
