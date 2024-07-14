import { useCallback, useState } from "react";
import { NewsItem } from "../types";
import { fetchStockNews } from "../api";

type UseStockNewsState = {
  news: NewsItem[];
  loading: boolean;
  refresh: (ticker: string) => Promise<void>;
};

export const useStockNews = (): UseStockNewsState => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);

  const refresh = useCallback(async (ticker: string) => {
    setLoading(true);
    setNews([]);
    try {
      const stockNews = await fetchStockNews(ticker);
      setNews(stockNews);
    } catch (e) {
      console.error("Unable to fetch stock news. Encountered error", e);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, news, refresh };
};
