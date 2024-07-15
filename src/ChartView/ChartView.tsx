import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useCallback, useEffect, useState } from "react";
import { usePriceData, usePriceDataToChartOptions } from "../hooks";
import applyTheme from "highcharts/themes/high-contrast-dark";
import stock from "highcharts/modules/stock";
import { addIntentListener, fdc3Ready } from "@finos/fdc3";

applyTheme(Highcharts);
stock(Highcharts);

export const ChartView = () => {
  const [currentTicker, setCurrentTicker] = useState("AAPL");

  const { prices, refresh } = usePriceData();

  const { chartOptions } = usePriceDataToChartOptions(
    prices,
    `Prices for ${currentTicker}`
  );

  const setup = useCallback(async () => {
    await fdc3Ready;
    const listener = await addIntentListener("ViewChart", (ctx) => {
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
    refresh(currentTicker);
  }, [refresh, currentTicker]);

  return (
    <HighchartsReact
      containerProps={{
        style: { height: "94%", width: "99%" },
        className: "highcharts-dark",
        padding: "8px",
      }}
      immutable
      highcharts={Highcharts}
      options={chartOptions}
    />
  );
};
