import React from "react";

function InputGroup(props) {
 
  return (
    <div className="flex flex-col gap-4 w-[70%]">
      <label for={props.inputtitle}>{props.labeltext}</label>
      <input
        id={props.inputtitle}
        placeholder={props.placeholder}
        type={props.type}
        className="h-[50px] px-4  bg-[#5A5B70]"
      />
    </div>
  );
}

export default InputGroup;
