import React from "react";

export default function Button(props) {
  return (
    <>
      <div className="bg-secMainColor  flex items-center justify-between p-4 rounded-xl">
        <span className="text-xl font-medium">{props.name}</span>
        <button className={props.className}>{props.innertext}</button>
        <select className="w-44 bg-bgoptions  py-3 px-3 rounded-3xl">
          <option>{props.selection1}</option>
        </select>
      </div>
    </>
  );
}
