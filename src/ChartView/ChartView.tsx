import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useCallback, useEffect, useState } from "react";
import { usePriceData, usePriceDataToChartOptions } from "../hooks";
import {
  addIntentListener,
  fdc3Ready,
  raiseIntent,
  getOrCreateChannel,
} from "@finos/fdc3";
import { guid } from "../FDCThreeli/utils";

export const ChartView = () => {
  const [currentTicker, setCurrentTicker] = useState("AAPL");

  const { prices, refresh } = usePriceData();

  const handlePointSelect = useCallback(async () => {
    await raiseIntent("ViewIntradayChart", {
      type: "viewIntradayChart",
      id: { ticker: currentTicker },
    });
  }, [currentTicker]);

  const { chartOptions } = usePriceDataToChartOptions(
    prices,
    `Prices for ${currentTicker}`,
    false,
    handlePointSelect
  );

  const setup = useCallback(async () => {
    await fdc3Ready();
    console.log("adding ViewChart intent lister");
    const intentListener = await addIntentListener("ViewChart", (ctx) => {
      console.log("received intent", ctx);
      setCurrentTicker(ctx.id?.ticker ?? "AAPL");
    });
    const channel = await getOrCreateChannel("currentTicker");
    const contextListener = await channel.addContextListener(
      "changeTicker",
      (ctx) => {
        setCurrentTicker(ctx.id?.ticker ?? "AAPL");
      }
    );

    return () => {
      intentListener.unsubscribe();
      contextListener.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const cleanup = setup();

    return () => {
      cleanup.then((cleanupFn) => cleanupFn());
    };
  }, [setup]);

  useEffect(() => {
    refresh(currentTicker, false);
  }, [refresh, currentTicker]);

  return (
    <HighchartsReact
      containerProps={{
        style: { height: "100%", width: "100%" },
        className: "highcharts-dark",
        padding: "0px",
      }}
      immutable
      highcharts={Highcharts}
      options={chartOptions}
    />
  );
};
