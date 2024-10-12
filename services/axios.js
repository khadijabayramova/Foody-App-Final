import axios from "axios";

const baseURL = "/api";

export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${baseURL}/order`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${}`, curl brake icinde access token gonderilmelidir
      },
    });

    return await response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
