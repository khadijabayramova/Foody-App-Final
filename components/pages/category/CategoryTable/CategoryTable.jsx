import Image from "next/image";
import React from "react";

export default function CategoryTable(props) {
  return (
    <tbody>
      <tr>
        <td class="px-8 py-4 border-y  ">{props.id}</td>
        <td class="px-4 py-2 border-y ">
          <Image
            src="/adminImgs/admin-category/fastfood.svg"
            width={40}
            height={40}
          />
        </td>
        <td class="px-8 py-4 border-y truncate max-w-10">{props.name}</td>
        <td class="px-8 py-4 border-y truncate max-w-10">{props.slug}</td>
        <td class="px-8 py-4 border-y">
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
                alt="edit"
              />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
