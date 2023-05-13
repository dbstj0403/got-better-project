import axios from "axios";

axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export default instance;
