import React from "react";
import Image from "next/image";
import Languages from "../../../admin-languages/page";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between w-[1500px] bg-secMainColor p-4 rounded-b-md">
          <div>
            <Image
              src="/adminImgs/logo.svg"
              alt="logo"
              width={92}
              height={32}
            />
          </div>
          <div className="flex items-center justify-center gap-6 font-semibold ">
            <div>
              <button className="w-32 h-7 bg-btnColor rounded-xl p-4 flex justify-start items-center ">
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
