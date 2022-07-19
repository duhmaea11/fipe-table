import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export const fipeApi = axiosClient;
