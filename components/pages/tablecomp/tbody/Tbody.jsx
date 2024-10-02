import Image from "next/image";
import React from "react";

function Tbody(props) {
  return (
    <tr>
      <td className="px-8 py-4 border-y">
        <span className="border border-#DFE2E9 px-4 py-1 rounded-3xl">
          {props.id}
        </span>
      </td>
      <td className=" px-8 py-4 border-y">
        <span className="border border-#DFE2E9 px-4 py-1 rounded-3xl">
          {props.customerId}
        </span>
      </td>
      <td className=" px-8 py-4 border-y">{props.time}</td>
      <td className=" px-8 py-4 border-y">{props.deliveryAddress}</td>
      <td className=" px-8 py-4 border-y">{props.amount}</td>
      <td className="px-8 py-4 border-y text-center">
        {props.paymentMethods}{" "}
      </td>
      <td className=" px-8 py-4 border-y">{props.contact}</td>
      <td className=" px-8 py-4 border-y">
        <div className="flex gap-2">
          <button>
            <Image
              src="/adminImgs/editing/detail.svg"
              width={20}
              height={20}
              alt="detail"
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
  );
}

export default Tbody;
