import { raiseIntent, getOrCreateChannel } from "@finos/fdc3";
import { useCallback } from "react";

type UseTickerOptionsState = {
  viewTickerData: (ticker: string) => Promise<void>;
  viewTickerNews: (ticker: string) => Promise<void>;
  viewTickerChart: (ticker: string) => Promise<void>;
};

export const useTickerOptions = (): UseTickerOptionsState => {
  const viewTickerData = useCallback(async () => {
    return;
  }, []);

  const viewTickerNews = useCallback(async (ticker: string) => {
    await raiseIntent("ViewNews", { type: "viewNews", id: { ticker } });
  }, []);

  const viewTickerChart = useCallback(async (ticker: string) => {
    await raiseIntent("ViewChart", { type: "viewChart", id: { ticker } });
  }, []);

  return { viewTickerData, viewTickerNews, viewTickerChart };
};
