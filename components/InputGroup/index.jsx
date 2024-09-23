import React from "react";

function InputGroup(props) {
  const { placeholder1, placeholder2, type1, type2 } = props;
  return (
    <div className="flex flex-col gap-4 w-[70%]"> {/* Reduced gap to match input spacing */}
      <input 
        placeholder={placeholder1} 
        type={type1} 
        className="h-[50px] px-4  bg-[#5A5B70]" 
      />
      <input 
        placeholder={placeholder2} 
        type={type2} 
        className="h-[50px]  px-4 bg-[#5A5B70]" 
      />
    </div>
  );
}

export default InputGroup;
