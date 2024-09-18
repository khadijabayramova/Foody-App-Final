// cors.js

import Cors from "nextjs-cors";

// Initialize CORS
export const cors = Cors({
  // Allow requests from any origin
  origin: "*",
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
});

// Helper function to apply CORS to your API route
export default function applyCors(req, res) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
