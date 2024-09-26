import React from "react";
import Image from "next/image";

export default function RestarantCard({ name, category }) {
  return (
    <div className="h-20 bg-white rounded-md flex items-center justify-between p-4 text-black">
      <div>
        <Image
          src="/adminImgs/papajons.svg"
          alt="logo"
          width={65}
          height={57}
        />
      </div>
      <div>
        <h2 className="font-semibold text-lg ">{name}</h2>
        <p className="text-restautanColor">{category}</p>
      </div>
      <div className="p-4 flex gap-2 flex-col">
        <button>
          <Image
            src="/adminImgs/editing/edit.svg"
            alt="edit"
            width={20}
            height={20}
          />
        </button>
        <button>
          <Image
            src="/adminImgs/editing/delete.svg"
            alt="edit"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
