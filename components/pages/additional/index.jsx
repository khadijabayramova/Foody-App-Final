import React from "react";
import Uploader from "../../shared/Upload/uploader";
import Sharebutton from "../../shared/sharebutton/index";
import { useContext } from "react";
import { GlobalContext } from "../../../Context/globalcontext";

export default function Additional(props) {
  const { setOpenaddproducts } = useContext(GlobalContext);

  return (
    <section className={props.className}>
      <div className="flex flex-col gap-4 w-full ">
        <div className="flex flex-col w-full gap-4">
          <p className="text-2xl font-bold">{props.name}</p>
          <p className="text-lg">{props.guider}</p>
        </div>

        <div className="flex gap-64 justify-center w-full items-center">
          {/* Image Container */}
          <div className="min-w-[150px] h-[150px] flex items-center justify-center">
            {props.Img || <span className="text-gray-400"></span>}
          </div>
          <Uploader />
        </div>
      </div>

      <div className="flex gap-40">
        <p className="text-lg w-[30%]">{props.desc}</p>
        <div className="bg-inputbg w-3/6 justify-center items-center rounded-xl flex">
          {props.inputs}
        </div>
      </div>

      <div className="flex justify-center gap-10">
        {/* Cancel Button */}
        <Sharebutton
          handleClicker={() => {
            setOpenaddproducts(false);
          }}
          className="h-10 text-lg w-96 px-9 rounded-xl hover:opacity-80 active:opacity-70 border-bgadditional text-bold bg-inputbg"
          btnName="Cancel"
        />

        {/* Create Product Button */}
        <Sharebutton
          className="h-10 text-lg w-96 px-9 rounded-xl hover:opacity-80 active:opacity-70 text-bold bg-btnColor"
          btnName="Create Product"
        />
      </div>
    </section>
  );
}
