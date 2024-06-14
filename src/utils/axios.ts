import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://cinemaguide.skillbox.cc/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default httpClient;
