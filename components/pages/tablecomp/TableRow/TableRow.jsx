import React from "react";
import { TrashIcon } from "../../../../assets/images/admin/admin.vector";

const TableRow = ({ data, handleDelete }) => {
  function timeSince(timestamp) {
    const currentTimestamp = Date.now(); // Get current time in milliseconds
    const timeDifference = currentTimestamp - timestamp; // Time difference in milliseconds

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // If more than or equal to one day, return the number of days
    if (days >= 1) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }

    if (hours >= 1) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }
    // If less than one day, return the number of hours
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  return (
    <tr className="h-14 text-center border-slate-700 border-y text-gray-900 text-sm not-italic font-normal leading-5">
      <td>
        <div>
          <p className="border-slate-700 border rounded-lg ml-2">{data.id}</p>
        </div>
      </td>
      <td>
        <div className="flex justify-center">
          <p className="border-slate-700 border rounded-lg px-2">
            {data.customer_id}
          </p>
        </div>
      </td>
      <td>{timeSince(data.created)}</td>
      <td>{data.delivery_address}</td>
      <td>{data.payment_method == 0 ? "Cash" : "Card"}</td>
      <td>{data.amount} &#8380;</td>
      <td>{data.contact}</td>
      <td className="cursor-pointer w-5" onClick={() => handleDelete(data.id)}>
        <TrashIcon />
      </td>
    </tr>
  );
};

export default TableRow;
