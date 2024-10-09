import React from "react";
import Uploader from "../../shared/Upload/uploader";
import Sharebutton from "../../shared/sharebutton/index";
import { useContext } from "react";
import { GlobalContext } from "../../../Context/globalcontext";
import Inputs from "./inputs/index";
export default function AddProducts() {
  const { setOpenaddproducts, image, resetform } = useContext(GlobalContext);

  return (
    <section className="flex flex-col gap-20 p-5 absolute top-0 -right-2.5 bg-bgadditional w-[67%] h-[148vh]">
      <div className="flex flex-col gap-4 w-full ">
        <div className="flex flex-col w-full gap-4">
          <p className="text-2xl font-bold">Add product</p>
          <p className="text-lg">Upload your product image</p>
        </div>

        <div className="flex gap-64 justify-center w-full items-center">
          {/* Image Container */}
          <div className="min-w-[15%] h-[150px] flex items-center justify-center">
            {" "}
            {image ? (
              <img
                width={124}
                height={117}
                src={image}
                alt="Uploaded Product"
                className="object-contain h-full"
              />
            ) : (
              ""
            )}{" "}
          </div>
          <Uploader />
        </div>
      </div>

      <div className="flex gap-40">
        <p className="text-lg w-[30%]">
          Edit your Product description and necessary information
        </p>
        <div className="bg-inputbg w-3/6 justify-center items-center rounded-xl flex">
          <Inputs />
        </div>
      </div>

      <div className="flex justify-center gap-10">
        {/* Cancel Button */}
        <Sharebutton
          handleClicker={() => {
            setOpenaddproducts(false);
            resetform();
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
