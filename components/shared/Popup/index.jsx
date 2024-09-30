import React from "react";
import Sharebutton from "../sharebutton/index";

export default function Popup() {
  return (
    <div className="bg-bgpopup w-[30%] h-60 p-4 flex flex-col justify-center items-center gap-3">
      <h1 className="font-bold text-bgColor text-2xl">
        Are you sure it’s deleted?
      </h1>
      <p className="text-productsdesc w-60">
        Attention! If you delete this product, it will not come back...
      </p>
      <div className="flex space-x-4 mt-4">
        <Sharebutton
          className="bg-bgpopup text-textcancel border border-textcancel hover:opacity-80 active:text-bgadditional font-bold px-5 py-1"
          btnName="cancel"
        />
        <Sharebutton
          className="bg-bgdelete text-bgpopup px-5 font-bold py-1 hover:opacity-80 active:opacity-85"
          btnName="delete"
        />
      </div>
    </div>
  );
}
