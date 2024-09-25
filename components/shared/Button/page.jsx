import React from "react";

export default function Button(props) {
  return (
    <>
      <div className="bg-secMainColor  flex items-center justify-between p-4 rounded-xl">
        <span>{props.name}</span>
        <button className={props.className}>{props.innertext}</button>
      </div>
    </>
  );
}
