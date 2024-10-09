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
        className="bg-bgoptions h-10 w-96 rounded-xl"
      />
      <div className="flex flex-col gap-4">
        <label for="message">Cuisine</label>
        <InputGroup
          id="message"
          type="text"
          className="bg-bgoptions p-4 h-40 w-96 rounded-xl"
        />
      </div>

      <InputGroup
        for="price"
        id="price"
        labeltext="Delivery Price $"
        type="text"
        className="bg-bgoptions h-10 w-96 rounded-xl"
      />
      <InputGroup
        for="delivery"
        id="delivery"
        labeltext="Delivery Min"
        type="text"
        className="bg-bgoptions h-10 w-96 rounded-xl"
      />
      <InputGroup
        for="address"
        id="address"
        labeltext="Address"
        type="text"
        className="bg-bgoptions h-10 w-96 rounded-xl"
      />

      <InputGroup
        for="category"
        id="category"
        labeltext="Category"
        type="text"
        className="bg-bgoptions h-10 w-96 rounded-xl"
      />
    </div>
  );
}

export default Inputs;
