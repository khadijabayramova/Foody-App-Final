import React from "react";
import Additional from "../../pages/additional";
import Inputs from "./inputs/index";

function AddRestaurant() {
  return (
    <div className="w-full ">
      <Additional
        className="flex flex-col p-5  gap-20 bg-bgadditional  w-3/4 h-[180vh] "
        name="Add Category  "
        guider="Upload  image"
        desc="Add your Category information"
        inputs={<Inputs />}
      />
    </div>
  );
}

export default AddRestaurant;
