import React from "react";

function MainButton(props) {
  const { btnDesc } = props;
  return (
    <div className="w-full flex justify-center items-center" >
      <button className="bg-[#C035A2] w-[70%]  h-[50px]">{btnDesc}</button>
    </div>
  );
}

export default MainButton;
