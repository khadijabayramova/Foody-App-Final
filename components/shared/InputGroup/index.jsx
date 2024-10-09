import React from "react";

function InputGroup(props) {
 
  return (
    <div className="flex flex-col  gap-4 w-[70%]">
      <label for={props.for}>{props.labeltext}</label>
      <input
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        className={props.className}
      />
    </div>
  );
}

export default InputGroup;
