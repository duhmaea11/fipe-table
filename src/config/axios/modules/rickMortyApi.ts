import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export const rickAndMortyApi = axiosClient;
