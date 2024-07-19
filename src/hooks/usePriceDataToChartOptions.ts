import { Options, PointClickEventObject, SeriesOptionsType } from "highcharts";
import { PriceData } from "../types";
import { useMemo } from "react";

type UsePriceDataToChartOptionsState = {
  chartOptions: Options;
};

export const usePriceDataToChartOptions = (
  priceData: PriceData[],
  chartTitle: string,
  intraday: boolean,
  onPointClick: (event: PointClickEventObject) => void
): UsePriceDataToChartOptionsState => {
  const options: Options = useMemo(() => {
    const seriesData: SeriesOptionsType = {
      type: "candlestick",
      showInLegend: false,
      data: priceData.map((priceItem) => {
        return {
          name: priceItem.datetime,
          x: new Date(priceItem.datetime).getTime(),
          open: Number(priceItem.open),
          high: Number(priceItem.high),
          low: Number(priceItem.low),
          close: Number(priceItem.close),
        };
      }),
    };

    return {
      xAxis: {
        title: {
          text: "Date",
        },
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "Price",
        },
      },
      plotOptions: {
        candlestick: {
          pointWidth: intraday ? 15 : 20,
          color: "#EE4A2D",
          upColor: "#5ED273",
          lineColor: "#EE4A2D",
          upLineColor: "#5ED273",
          point: {
            events: {
              click: onPointClick,
            },
          },
        },
      },
      credits: { enabled: false },
      title: { text: chartTitle },
      series: [seriesData],
    };
  }, [priceData, chartTitle, onPointClick, intraday]);

  return { chartOptions: options };
};
