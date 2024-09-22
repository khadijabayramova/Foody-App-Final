import React from "react";

export default function AddBtn(props) {
  return (
    <>
      <div className="bg-secMainColor  flex items-center justify-between p-4 rounded-xl">
        <span>{props.name}</span>
        <button className="bg-btnColor rounded-xl p-2 text-center w-36">
          + {props.add}
        </button>
      </div>
    </>
  );
}
