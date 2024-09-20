import React from "react";
import config from "../configs/config.js";

const authData = require("../configs/config.js");

console.log("Auth Data from .env:", authData);

console.log("Auth Key:", authData.type);

export default function index() {
  return <div>salammmmm balashka</div>;
}
