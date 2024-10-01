import React from "react";

export default function Sharebutton({className, btnName, handleClicker}) {
  return (
    <div>
      <button onClick={handleClicker} className={className}>
        {btnName}
      </button>
    </div>
  );
}
