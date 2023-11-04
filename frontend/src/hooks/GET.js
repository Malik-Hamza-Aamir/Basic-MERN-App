import axios from "axios";

export const GET = (payload, url) => {
  axios
    .get(url, {
      params: payload,
    })
    .then((response) => {
      console.log("response from api :", response);
    })
    .catch((error) => {
      console.log("Error :", error);
    });
};
