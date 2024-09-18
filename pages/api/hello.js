import { enableCors } from "utils/enableCors";
import { handlerProductGET, handlerProductPOST } from "routes/product";
import { ROUTER } from "constant/router";

import admin from "configs/firebaseAdmin";
import { addData } from "helper/addData";
import { getQueryData } from "helper/getQueryData";

import { generateJWT, generateRefreshToken } from "utils/jwt";
import { comparePasswords } from "utils/passwordHash";

async function handler(req, res) {
  if (req.method == "GET") {
    res.status(200).json({ hello: "hey" });
    await handlerProductGET(req, res, ROUTER.PRODUCTS);
  }

  if (req.method == "POST") {
    const { email, password } = req.body;

    try {
      const userCredentials = await admin.auth().getUserByEmail(email);

      const userInfo = await getQueryData(
        ROUTER.USERS_HASH_PASSWORD,
        "email",
        email
      );

      const isPasswordCorrect = await comparePasswords(
        password,
        userInfo[0].password
      );

      if (!isPasswordCorrect || !userCredentials) {
        res.status(404).json({ error: "Password or email is not correct" });
      }

      // const access_token = await admin
      //   .auth()
      //   .createCustomToken(userCredentials.uid);

      const access_token = generateJWT(userCredentials.uid);
      const refresh_token = generateRefreshToken(userCredentials.uid);

      const card = await getQueryData(
        ROUTER.CARD,
        "user_id",
        userCredentials.uid
      );

      const userCard = card?.[0];

      if (!userCard) {
        await addData(ROUTER.CARD, {
          items: [],
          user_id: userCredentials.uid,
          total_amount: 0,
          total_item: 0,
        });
      }

      const user = {
        id: userCredentials.uid,
        email: userCredentials.email,
        ...userCredentials.customClaims,
        access_token,
        refresh_token,
      };

      res.status(200).json({
        message: "User signed in successfully",
        user,
      });
    } catch (error) {
      console.error("Error signing in:", error);
      res.status(401).json({ error: "Could not sign in" });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
  // switch (req.method) {
  //   case METHOD.GET:
  //     await handlerProductGET(req, res, ROUTER.PRODUCTS);
  //     return;
  //   case METHOD.POST:
  //     await handlerProductPOST(req, res, ROUTER.PRODUCTS);
  //     return;
  //   default:
  //     res.status(405).end();
  // }
}

export default enableCors(handler);
