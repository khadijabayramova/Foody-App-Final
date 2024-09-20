import React from "react";

function InputGroup(props) {
  const { placeholder1, placeholder2, type1, type2 } = props;
  return (
    <div>
      <input placeholder={placeholder1} type={type1} />
      <input placeholder={placeholder2} type={type2} />
    </div>
  );
}

export default InputGroup;
