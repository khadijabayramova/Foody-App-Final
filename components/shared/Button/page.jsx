import React from "react";

export default function Button(props) {
  return (
    <>
      <button className={props.className}>{props.innertext}</button>
    </>
  );
}
