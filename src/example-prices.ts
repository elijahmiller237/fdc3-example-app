import { PriceData } from "./types";

export const examplePriceData: {
  meta: Record<string, string>;
  values: PriceData[];
  status: string;
} = {
  meta: {
    symbol: "AMZN",
    interval: "1day",
    currency: "USD",
    exchange_timezone: "America/New_York",
    exchange: "NASDAQ",
    mic_code: "XNGS",
    type: "Common Stock",
  },
  values: [
    {
      datetime: "2024-07-12",
      open: "194.80000",
      high: "196.47000",
      low: "193.83000",
      close: "194.49001",
      volume: "30554000",
    },
    {
      datetime: "2024-07-11",
      open: "200.09000",
      high: "200.27000",
      low: "192.86000",
      close: "195.05000",
      volume: "44565000",
    },
    {
      datetime: "2024-07-10",
      open: "200.00000",
      high: "200.11000",
      low: "197.69000",
      close: "199.78999",
      volume: "32883800",
    },
    {
      datetime: "2024-07-09",
      open: "199.39999",
      high: "200.57001",
      low: "199.05000",
      close: "199.34000",
      volume: "32700100",
    },
    {
      datetime: "2024-07-08",
      open: "200.03999",
      high: "201.20000",
      low: "197.96001",
      close: "199.28999",
      volume: "34767300",
    },
    {
      datetime: "2024-07-05",
      open: "198.64999",
      high: "200.55000",
      low: "198.17000",
      close: "200.00000",
      volume: "39858900",
    },
    {
      datetime: "2024-07-03",
      open: "199.94000",
      high: "200.03000",
      low: "196.75999",
      close: "197.59000",
      volume: "31597900",
    },
    {
      datetime: "2024-07-02",
      open: "197.28000",
      high: "200.42999",
      low: "195.92999",
      close: "200.00000",
      volume: "45600000",
    },
    {
      datetime: "2024-07-01",
      open: "193.49001",
      high: "198.30000",
      low: "192.82001",
      close: "197.20000",
      volume: "41192000",
    },
    {
      datetime: "2024-06-28",
      open: "197.73000",
      high: "198.85001",
      low: "192.50000",
      close: "193.25000",
      volume: "76930200",
    },
    {
      datetime: "2024-06-27",
      open: "195.00999",
      high: "199.84000",
      low: "194.20000",
      close: "197.85001",
      volume: "74397500",
    },
    {
      datetime: "2024-06-26",
      open: "186.92000",
      high: "194.80000",
      low: "186.25999",
      close: "193.61000",
      volume: "65103900",
    },
    {
      datetime: "2024-06-25",
      open: "186.81000",
      high: "188.84000",
      low: "185.42000",
      close: "186.34000",
      volume: "45898500",
    },
    {
      datetime: "2024-06-24",
      open: "189.33000",
      high: "191.00000",
      low: "185.33000",
      close: "185.57001",
      volume: "50610400",
    },
    {
      datetime: "2024-06-21",
      open: "187.80000",
      high: "189.28000",
      low: "185.86000",
      close: "189.08000",
      volume: "72931800",
    },
    {
      datetime: "2024-06-20",
      open: "182.91000",
      high: "186.50999",
      low: "182.72000",
      close: "186.10001",
      volume: "44726800",
    },
    {
      datetime: "2024-06-18",
      open: "183.74001",
      high: "184.28999",
      low: "181.42999",
      close: "182.81000",
      volume: "36659200",
    },
    {
      datetime: "2024-06-17",
      open: "182.52000",
      high: "185.00000",
      low: "181.22000",
      close: "184.06000",
      volume: "35601900",
    },
    {
      datetime: "2024-06-14",
      open: "183.08000",
      high: "183.72000",
      low: "182.23000",
      close: "183.66000",
      volume: "25456400",
    },
    {
      datetime: "2024-06-13",
      open: "186.09000",
      high: "187.67000",
      low: "182.67000",
      close: "183.83000",
      volume: "39721500",
    },
    {
      datetime: "2024-06-12",
      open: "188.02000",
      high: "188.35001",
      low: "185.42999",
      close: "186.89000",
      volume: "33984200",
    },
    {
      datetime: "2024-06-11",
      open: "187.06000",
      high: "187.77000",
      low: "184.53999",
      close: "187.23000",
      volume: "27265100",
    },
    {
      datetime: "2024-06-10",
      open: "184.07001",
      high: "187.23000",
      low: "183.78999",
      close: "187.06000",
      volume: "34494500",
    },
    {
      datetime: "2024-06-07",
      open: "184.89999",
      high: "186.28999",
      low: "183.36000",
      close: "184.30000",
      volume: "28021500",
    },
    {
      datetime: "2024-06-06",
      open: "181.75000",
      high: "185.00000",
      low: "181.49001",
      close: "185.00000",
      volume: "31371200",
    },
    {
      datetime: "2024-06-05",
      open: "180.10001",
      high: "181.50000",
      low: "178.75000",
      close: "181.28000",
      volume: "32116400",
    },
    {
      datetime: "2024-06-04",
      open: "177.64000",
      high: "179.82001",
      low: "176.44000",
      close: "179.34000",
      volume: "27198400",
    },
    {
      datetime: "2024-06-03",
      open: "177.70000",
      high: "178.70000",
      low: "175.92000",
      close: "178.34000",
      volume: "30786600",
    },
    {
      datetime: "2024-05-31",
      open: "178.30000",
      high: "179.21001",
      low: "173.87000",
      close: "176.44000",
      volume: "58903900",
    },
    {
      datetime: "2024-05-30",
      open: "181.31000",
      high: "181.34000",
      low: "178.36000",
      close: "179.32001",
      volume: "29249200",
    },
  ],
  status: "ok",
};
