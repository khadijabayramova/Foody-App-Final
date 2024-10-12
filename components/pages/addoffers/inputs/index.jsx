import React from "react";
import InputGroup from "../../../shared/InputGroup";

function Inputs() {
  return (
    <div className="flex flex-col gap-6 p-5">
      <InputGroup
        for="title"
        id="title"
        labeltext="Title"
        type="text"
        className="bg-bgoptions h-10 w-96 rounded-xl"
      />
      <div className="flex flex-col gap-4">
        <label for="message">Describtion</label>
        <textarea
          id="message"
          type="text"
          className="bg-bgoptions p-4 h-40 w-96 rounded-xl"
        />
      </div>
    </div>
  );
}

export default Inputs;
