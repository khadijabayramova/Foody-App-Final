import React from "react";
import Additional from "../additional";
import Inputs from "./inputs";
function AddCategory() {
  return (
    <div className="w-full">
      <Additional
        className="flex flex-col p-5  gap-20 bg-bgadditional  w-3/4 h-[100vh]"
        name="Add Category  "
        guider="Upload  image"
        desc="Add your Category information"
        inputs={<Inputs />}
      />
    </div>
  );
}

export default AddCategory;
