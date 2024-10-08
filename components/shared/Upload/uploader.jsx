// pages/upload.jsx
import React, { useRef } from "react";
import Image from "next/image";

function Uploader() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the file input when the button is clicked
    fileInputRef.current.click();
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
        ref={fileInputRef}
        className="invisible"
        type="file"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default Uploader;
