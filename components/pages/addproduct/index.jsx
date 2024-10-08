import React from "react";
import Additional from "../additional";
import Inputs from "./inputs/index";
import { useContext } from "react";
import { GlobalContext } from "../../../Context/globalcontext";
function AddProduct() {
  const { handleAddProducts } = useContext(GlobalContext);
  return (
    <div
      className={` w-[80%] absolute top-0 -right-48
          h-full transition-transform duration-300 ${
        handleAddProducts ? "right-0" : "-right-full"
      }`}
    >
      <Additional
        className="flex flex-col p-5 gap-20 bg-bgadditional w-[85%] h-[148vh]"
        name="Add product"
        guider="Upload your product image"
        desc="Add your Product description and necessary information"
        inputs={<Inputs />}
      />
    </div>
  );
}

export default AddProduct;
