import React ,{ useContext } from "react";
import Sharebutton from "../sharebutton/index";
import { GlobalContext } from "../../../Context/globalcontext";
export default function Popup() {
  const { setOpenPopup } = useContext(GlobalContext);
  return (
    <div className="bg-bgpopup absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-60 p-4 flex flex-col justify-center items-center gap-3">
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
          handleClicker={() => setOpenPopup(false)}
        />
        <Sharebutton
          className="bg-bgdelete text-bgpopup px-5 font-bold py-1 hover:opacity-80 active:opacity-85"
          btnName="delete"
        />
      </div>
    </div>
  );
}
