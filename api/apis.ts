import { Pokedex } from "@/Types/ProdutsType";
import axios from "axios";

const Api = axios.create({
  baseURL: process.env.BASEURL,
});

export const getProduts = async () => {
  const res = await Api.get<Pokedex>("/products");
  return res.data.data;
};

export const getProdutsdetail = async (pid: number) => {
  console.log(pid)
  const results = await axios.get("https://myeasykart.codeyogi.io/product/" + pid);
  return results.data;
};
