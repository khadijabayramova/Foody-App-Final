import React from "react";
import Image from "next/image";
import Languages from "../admin-languages";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between w-[1400px] bg-[#27283C] p-4 rounded-b-md">
          <div>
            <Image
              src="/adminImgs/logo.svg"
              alt="logo"
              width={92}
              height={32}
            />
          </div>
          <div className="flex items-center justify-center gap-6 font-semibold text-white">
            <div>
              <button className="w-32 h-7 bg-[#C03532] rounded-xl p-4 flex justify-start items-center ">
                + add
              </button>
            </div>
            <Languages />
            <div>
              <button>Admin</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
