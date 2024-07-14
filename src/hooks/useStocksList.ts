import { useCallback, useState } from "react";
import { StockData } from "../types";
import { fetchStocksList } from "../api";

type UseStocksListState = {
  stocks: StockData[];
  loading: boolean;
  refresh: () => Promise<void>;
};

export const useStocksList = (): UseStocksListState => {
  const [loading, setLoading] = useState(false);
  const [stocks, setStocks] = useState<StockData[]>([]);

  const refresh = useCallback(async () => {
    setLoading(true);
    setStocks([]);
    try {
      const stocksList = await fetchStocksList();
      setStocks(stocksList);
    } catch (e) {
      console.error("Unable to fetch stocks list. Encountered error", e);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, stocks, refresh };
};
