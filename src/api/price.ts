import axios from "axios";
import { IntradayPriceData, PriceData } from "../types";

const dailyPricesUrl = "https://twelve-data1.p.rapidapi.com";
const DAILY_PRICES_PATH = "/time_series";
const DAILY_PRICES_PARAMS = {
  outputsize: 30,
  interval: "1day",
  format: "json",
};

export const fetchDailyPriceData = async (
  ticker: string
): Promise<PriceData[]> => {
  const response = await axios<{
    meta: Record<string, string>;
    values: PriceData[];
    status: string;
  }>({
    method: "get",
    url: DAILY_PRICES_PATH,
    baseURL: dailyPricesUrl,
    params: { ...DAILY_PRICES_PARAMS, symbol: ticker },
    headers: {
      "X-Rapidapi-Host": "twelve-data1.p.rapidapi.com",
      "X-Rapidapi-Key": import.meta.env.VITE_RAPID_API_KEY ?? "",
    },
  });

  return response.data.values;
};

const intradayPricesUrl = "https://apistocks.p.rapidapi.com";
const INTRADAY_PRICES_PATH = "/intraday";
const INTRADAY_PRICES_PARAMS = {
  interval: "5min",
  maxreturn: 78,
};

export const fetchIntradayPriceData = async (
  ticker: string
): Promise<PriceData[]> => {
  const response = await axios<{
    Metadata: Record<string, string>;
    Results: IntradayPriceData[];
  }>({
    method: "get",
    url: INTRADAY_PRICES_PATH,
    baseURL: intradayPricesUrl,
    params: { ...INTRADAY_PRICES_PARAMS, symbol: ticker },
    headers: {
      "X-Rapidapi-Host": "apistocks.p.rapidapi.com",
      "X-Rapidapi-Key": import.meta.env.VITE_RAPID_API_KEY ?? "",
    },
  });

  return response.data.Results.map((priceItem) => ({
    datetime: priceItem.Date,
    open: priceItem.Open,
    close: priceItem.Close,
    high: priceItem.High,
    low: priceItem.Low,
    volume: priceItem.Volume,
  }));
};
