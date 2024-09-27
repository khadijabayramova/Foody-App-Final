import React from "react";

export default function Dropdown(props) {
  return (
    <div>
      <div className="bg-secMainColor  flex items-center justify-between p-4 rounded-xl">
        <span className="text-xl font-medium">{props.name}</span>
        <select className="w-44 text-xl bg-bgoptions  py-3 px-5 rounded-3xl">
          <option>{props.selection}</option>
        </select>
      </div>
    </div>
  );
}
