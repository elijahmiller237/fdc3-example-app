import axios from "axios";
import { PriceData } from "../types";

const url = "https://twelve-data1.p.rapidapi.com";
const PRICES_PATH = "/time_series";
const PRICES_PARAMS = { outputsize: 30, interval: "1day", format: "json" };

export const fetchPriceData = async (ticker: string): Promise<PriceData[]> => {
  const response = await axios<{
    meta: Record<string, string>;
    values: PriceData[];
    status: string;
  }>({
    method: "get",
    url: PRICES_PATH,
    baseURL: url,
    params: { ...PRICES_PARAMS, symbol: ticker },
    headers: {
      "X-Rapidapi-Host": "twelve-data1.p.rapidapi.com",
      "X-Rapidapi-Key": import.meta.env.VITE_RAPID_API_KEY ?? "",
    },
  });

  return response.data.values;
};
