import axios from "axios";
import { StockData } from "../types";

const url = "https://twelve-data1.p.rapidapi.com";
const STOCKS_LIST_PATH = "/stocks";
const STOCKS_LIST_PARAMS = { exchange: "NASDAQ", format: "json" };

export const fetchStocksList = async (): Promise<StockData[]> => {
  const response = await axios<{ data: StockData[] }>({
    method: "get",
    url: STOCKS_LIST_PATH,
    baseURL: url,
    params: STOCKS_LIST_PARAMS,
    headers: {
      "X-Rapidapi-Host": "twelve-data1.p.rapidapi.com",
      "X-Rapidapi-Key": import.meta.env.VITE_RAPID_API_KEY ?? "",
    },
  });

  return response.data.data;
};
