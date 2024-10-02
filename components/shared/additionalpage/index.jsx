import React from "react";
import InputGroup from "../InputGroup";
import Button from "../Button/page";
import UploadPage from "../upload/upload";
export default function Additionalpage() {
  return (
    <div className="flex flex-col gap-40 bg-bgadditional w-3/5">
      {/* solid input */}
      <div className="flex gap-4">
        <div>
          <h1>Add product</h1>
          <p>Upload your product image</p>
        </div>
        <UploadPage />
      </div>
      {/* group inputs */}
      <div className="flex gap-4">
        <p>Add your Product description and necessary information</p>
        <div>
          <InputGroup labeltext="Product name" type="text" />
          <InputGroup labeltext="Description" type="textarea" />
          <InputGroup labeltext="Price" type="text" />
          <select>
            <option>Papa John's</option>
          </select>
        </div>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}
