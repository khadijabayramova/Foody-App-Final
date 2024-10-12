// pages/upload.jsx
import React, { useRef } from "react";
import Image from "next/image";
import { useContext } from "react";
import { GlobalContext } from "../../../Context/globalcontext";
function Uploader() {
  const fileInputRef = useRef(null);
  const {  setImage } = useContext(GlobalContext);
  const handleButtonClick = () => {
    // Trigger the file input when the button is clicked
    fileInputRef.current.click();
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  };
  return (
    <div className="bg-inputbg w-3/6 h-[16vh] rounded-xl flex justify-center items-center">
      <button onClick={handleButtonClick} className="">
        <Image
          src="/adminImgs/upload.svg"
          width={80}
          height={90}
          alt="Upload"
        />
      </button>
      <input
        onChange={handleFileUpload}
        ref={fileInputRef}
        className="invisible"
        type="file"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default Uploader;
