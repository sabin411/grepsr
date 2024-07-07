import axios from "axios";

axios.defaults.responseType = "json";
const baseUrl = process.env.NEXT_PUBLIC_API;

export const API = axios.create({
  baseURL: baseUrl,
});
