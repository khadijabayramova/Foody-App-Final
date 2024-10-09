import React from "react";

export default function Button(props) {
  return (
    <>
      <div className="bg-secMainColor  flex items-center justify-between p-4 rounded-xl">
        <span className="text-xl font-medium">{props.name}</span>
        <button onClick={props.onClick} className={props.className}>{props.innertext}</button>
      
      </div>
    </>
  );
}
