import * as fdc3 from "@finos/fdc3";
import { useCallback } from "react";

type UseTickerOptionsState = {
  viewTickerData: (ticker: string) => Promise<void>;
  viewTickerNews: (ticker: string) => Promise<void>;
  viewTickerChart: (ticker: string) => Promise<void>;
};

export const useTickerOptions = (): UseTickerOptionsState => {
  const viewTickerData = useCallback(async (ticker: string) => {
    return;
  }, []);

  const viewTickerNews = useCallback(async (ticker: string) => {
    await fdc3.raiseIntent("ViewNews", { type: "viewNews", id: { ticker } });
  }, []);

  const viewTickerChart = useCallback(async (ticker: string) => {
    return;
  }, []);

  return { viewTickerData, viewTickerNews, viewTickerChart };
};
