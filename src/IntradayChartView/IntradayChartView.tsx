import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useCallback, useEffect, useState } from "react";
import { usePriceData, usePriceDataToChartOptions } from "../hooks";

import { addIntentListener, fdc3Ready } from "@finos/fdc3";

export const IntradayChartView = () => {
  const [currentTicker, setCurrentTicker] = useState("AAPL");

  const { prices, refresh } = usePriceData();

  const { chartOptions } = usePriceDataToChartOptions(
    prices,
    `Intraday Prices for ${currentTicker}`,
    true,
    () => {
      return;
    }
  );

  const setup = useCallback(async () => {
    await fdc3Ready;
    const listener = await addIntentListener("ViewIntradayChart", (ctx) => {
      setCurrentTicker(ctx.id?.ticker ?? "AAPL");
    });

    return () => listener.unsubscribe();
  }, []);

  useEffect(() => {
    const cleanup = setup();

    return () => {
      cleanup.then((cleanupFn) => cleanupFn());
    };
  }, [setup]);

  useEffect(() => {
    refresh(currentTicker, true);
  }, [refresh, currentTicker]);

  return (
    <HighchartsReact
      containerProps={{
        style: { height: "94%", width: "99%" },
        className: "highcharts-dark",
        padding: "0px",
      }}
      immutable
      highcharts={Highcharts}
      options={chartOptions}
    />
  );
};
