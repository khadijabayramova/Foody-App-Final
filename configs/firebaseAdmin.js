// firebaseAdmin.js
import admin from "firebase-admin";
import authData from "./config";

if (!admin.apps.length) {
  const serviceAccount = authData; // Replace with your own path

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://foody-test-3224a.firebaseio.com'
  });
}

export const storage = admin.storage();
export const firestore = admin.firestore();

export default admin;
