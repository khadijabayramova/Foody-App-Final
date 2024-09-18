import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    axios.get("https://foody-api.vercel.app/api/products");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Foody App</title>
        <meta name="description" content="REST API for Foody APP" />
        <link
          rel="icon"
          href="https://w7.pngwing.com/pngs/713/936/png-transparent-online-shopping-shopping-cart-logo-e-commerce-market-blue-angle-company-thumbnail.png"
        />
      </Head>

      <main className={styles.main}>
        <button
          onClick={() =>
            axios({
              method: "POST",
              url: "https://foody-api.vercel.app/api/auth/signin",
              // url: "/api/auth/signin",
              data: {
                email: "r90@gmail.com",
                password: "1111",
              },
              // mode: "no-cors",
            }).then((res) => {
              console.log("res", res);
            })
          }
        >
          Send
        </button>
        <button
          onClick={() =>
            axios
              .post(
                "https://foody-api.vercel.app/api/products",
                {
                  name: "string",
                  description: "string",
                  img_url: "string",
                  rest_id: "string",
                  price: 4,
                },
                {
                  // url: "https://foody-api.vercel.app/api/products",
                  // url: "/api/auth/signin",
                  // mode: "no-cors",
                }
              )
              .then((res) => {
                console.log("res", res);
              })
          }
        >
          Create product
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 50 }}>
          <div>
            <img
              width={100}
              src="https://eacampschool.com/assets/logos/elshad-agayevs-school-logo.png"
            />
            <h1 className={styles.title}>
              Documentation
              <br />
              <a href="#">Foody App!</a>
            </h1>

            <div style={{ display: "flex", gap: 20 }}>
              <button
                style={{}}
                className={styles.button}
                onClick={() => push("/api-docs")}
              >
                GET DOCS
              </button>
              <a
                className={styles.button}
                style={{ backgroundColor: "orange" }}
                href="/FoodyApp.postman_collection.json"
                download
              >
                DOWNLOAD COLLECTION
              </a>
            </div>
          </div>

          <img src="https://www.sw-studio.it/images/resource/ecommerce/cms-and-ecommerce.gif" />
        </div>
      </main>
    </div>
  );
}
