import React from "react";

export default function Dropdown(props) {
  return (
    <div>
      <div className="bg-secMainColor  flex items-center justify-between p-4 rounded-xl">
        <span className="text-xl font-medium">{props.name}</span>
       
      </div>
    </div>
  );
}
