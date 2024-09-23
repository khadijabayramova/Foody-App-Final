import React from "react";
import Image from "next/image";

export default function RestarantCard({ name }) {
  return (
    <div className="h-20 bg-white rounded-md flex items-center p-3 gap-4 text-black">
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
        <p className="text-restautanColor">Fast food</p>
      </div>
    </div>
  );
}
