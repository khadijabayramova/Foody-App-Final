import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";
const config = require("../configs/config.json");

const projectId = config.project_id;
const privateKey = config.private_key;
const clientEmail = config.client_email;
console.log(projectId, privateKey, clientEmail);
export default function Home(props) {
  let { name } = props;
  return (
    <div>
      <h1>{(name = "Hello World")}</h1>
    </div>
  );
}
