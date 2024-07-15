import { useCallback, useState } from "react";
import { PriceData } from "../types";
import { fetchPriceData } from "../api";

type UsePriceDataState = {
  prices: PriceData[];
  loading: boolean;
  refresh: (ticker: string) => Promise<void>;
};

export const usePriceData = (): UsePriceDataState => {
  const [loading, setLoading] = useState(false);
  const [prices, setPrices] = useState<PriceData[]>([]);

  const refresh = useCallback(async (ticker: string) => {
    setLoading(true);
    setPrices([]);
    try {
      const stocksList = await fetchPriceData(ticker);
      setPrices(stocksList);
    } catch (e) {
      console.error("Unable to fetch price data. Encountered error", e);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, prices, refresh };
};
