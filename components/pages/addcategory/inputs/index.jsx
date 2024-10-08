import React from "react";
import InputGroup from "../../../shared/InputGroup";

function Inputs() {
  return (
    <div className="flex flex-col gap-6 p-5">
      <InputGroup
        for="name"
        id="name"
        labeltext="Name"
        type="text"
        className="bg-bgoptions h-10 pl-4 w-96 rounded-xl"
      />
    </div>
  );
}

export default Inputs;
