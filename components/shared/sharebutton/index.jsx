import React from "react";

export default function Sharebutton(props) {
  return (
    <div>
      <button className={props.className}>{props.btnName} </button>
    </div>
  );
}
