import axios from "axios";
import { NewsItem } from "../types";
import { exampleNews } from "../example-news";

const url = "https://yahoo-finance160.p.rapidapi.com";
const STOCKS_LIST_PATH = "/stocknews";

export const fetchStockNews = async (ticker: string): Promise<NewsItem[]> => {
  /* const response = await axios<NewsItem[]>({
    method: "post",
    url: STOCKS_LIST_PATH,
    baseURL: url,
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY ?? "",
      "x-rapidapi-host": "yahoo-finance160.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: { stock: ticker },
  }); */

  //return response.data;
  return exampleNews;
};
