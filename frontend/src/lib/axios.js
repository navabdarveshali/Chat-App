import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapi.navabdarveshali.xyz/api",
  withCredentials: true,
});
