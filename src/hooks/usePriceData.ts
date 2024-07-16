import { useCallback, useState } from "react";
import { PriceData } from "../types";
import { fetchDailyPriceData, fetchIntradayPriceData } from "../api";

type UsePriceDataState = {
  prices: PriceData[];
  loading: boolean;
  refresh: (ticker: string, intraday: boolean) => Promise<void>;
};

export const usePriceData = (): UsePriceDataState => {
  const [loading, setLoading] = useState(false);
  const [prices, setPrices] = useState<PriceData[]>([]);

  const refresh = useCallback(async (ticker: string, intraday: boolean) => {
    setLoading(true);
    setPrices([]);
    try {
      const pricesList = await (intraday
        ? fetchIntradayPriceData(ticker)
        : fetchDailyPriceData(ticker));
      setPrices(pricesList);
    } catch (e) {
      console.error("Unable to fetch price data. Encountered error", e);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, prices, refresh };
};
