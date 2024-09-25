import Image from "next/image";
import React from "react";

export default function CategoryTable() {
  return (
    <table class="min-w-full bg-blue-400 border">
      <thead>
        <tr>
          <th class="px-4 py-2 text-start">Id</th>
          <th class="px-4 py-2 text-start">Image</th>
          <th class="px-4 py-2 text-start">Name</th>
          <th class="px-4 py-2 text-start">Slug</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="px-4 py-2 border-y ">John</td>
          <td class="px-4 py-2 border-y ">
            <Image
              src="/adminImgs/admin-category/fastfood.svg"
              width={40}
              height={40}
            />
          </td>
          <td class="px-4 py-2 border-y">New York</td>
          <td class="px-4 py-2 border-y">New York</td>
          <td class="px-4 py-2 border-y">
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
    </table>
  );
}
