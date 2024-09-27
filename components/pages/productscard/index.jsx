import React from "react";
import Image from "next/image";

export default function ProductsCard() {
  return (

    <div className="bg-white p-5 rounded-md h-[44vh]  text-black">
      <Image
        src="../../../adminImgs/margarita.svg"
        width={200}
        height={200}
        alt="product img"
      />
      <h2 className="text-bgColor text-[18px] font-[550]">Margherita</h2>
      <p className="text-productsdesc">Papa John’s</p>

      <div className="flex justify-between">
        <p className="text-productstitle">16.9$</p>
        <div className="flex gap-2">
          <Image
            width={20}
            height={20}
            src="/adminImgs/editing/edit.svg"
            alt="delete"
          />
          <Image
            width={20}
            height={20}
            src="/adminImgs/editing/delete.svg"
            alt="edit"
          />
        </div>
      </div>
    </div>
  );
}
