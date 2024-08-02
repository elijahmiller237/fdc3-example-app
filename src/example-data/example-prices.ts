import { IntradayPriceData, PriceData } from "../types";

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

export const exampleIntradayPriceData: {
  Metadata: Record<string, any>;
  Results: IntradayPriceData[];
} = {
  Metadata: {
    Symbol: "AAPL",
    Interval: "5min",
    Maxreturn: 78,
    Timezone: "US EST",
  },
  Results: [
    {
      Date: "2024-07-31 09:30",
      Open: 221.44,
      Close: 221.59,
      High: 222.35,
      Low: 220.63,
      Volume: 1562984,
    },
    {
      Date: "2024-07-31 09:35",
      Open: 221.61,
      Close: 222.545,
      High: 222.63,
      Low: 221.57,
      Volume: 1023632,
    },
    {
      Date: "2024-07-31 09:40",
      Open: 222.5318,
      Close: 221.62,
      High: 222.66,
      Low: 221.16,
      Volume: 729627,
    },
    {
      Date: "2024-07-31 09:45",
      Open: 221.63,
      Close: 221.76,
      High: 221.99,
      Low: 221.39,
      Volume: 526645,
    },
    {
      Date: "2024-07-31 09:50",
      Open: 221.76,
      Close: 222.385,
      High: 222.41,
      Low: 221.5332,
      Volume: 496511,
    },
    {
      Date: "2024-07-31 09:55",
      Open: 222.35,
      Close: 221.98,
      High: 222.56,
      Low: 221.8,
      Volume: 446253,
    },
    {
      Date: "2024-07-31 10:00",
      Open: 221.98,
      Close: 222.115,
      High: 222.5,
      Low: 221.83,
      Volume: 464240,
    },
    {
      Date: "2024-07-31 10:05",
      Open: 222.1299,
      Close: 222.335,
      High: 222.52,
      Low: 221.9901,
      Volume: 389352,
    },
    {
      Date: "2024-07-31 10:10",
      Open: 222.31,
      Close: 222.34,
      High: 222.63,
      Low: 222.23,
      Volume: 381919,
    },
    {
      Date: "2024-07-31 10:15",
      Open: 222.34,
      Close: 223.265,
      High: 223.32,
      Low: 222.25,
      Volume: 618608,
    },
    {
      Date: "2024-07-31 10:20",
      Open: 223.26,
      Close: 223.21,
      High: 223.44,
      Low: 223.04,
      Volume: 636313,
    },
    {
      Date: "2024-07-31 10:25",
      Open: 223.21,
      Close: 222.83,
      High: 223.28,
      Low: 222.585,
      Volume: 495322,
    },
    {
      Date: "2024-07-31 10:30",
      Open: 222.84,
      Close: 223.29,
      High: 223.33,
      Low: 222.65,
      Volume: 379484,
    },
    {
      Date: "2024-07-31 10:35",
      Open: 223.305,
      Close: 223.75,
      High: 223.82,
      Low: 223.16,
      Volume: 392516,
    },
    {
      Date: "2024-07-31 10:40",
      Open: 223.74,
      Close: 223.26,
      High: 223.79,
      Low: 223.25,
      Volume: 465725,
    },
    {
      Date: "2024-07-31 10:45",
      Open: 223.26,
      Close: 223.43,
      High: 223.82,
      Low: 223.25,
      Volume: 394648,
    },
    {
      Date: "2024-07-31 10:50",
      Open: 223.43,
      Close: 223.1,
      High: 223.43,
      Low: 223,
      Volume: 409532,
    },
    {
      Date: "2024-07-31 10:55",
      Open: 223.1,
      Close: 222.61,
      High: 223.25,
      Low: 222.56,
      Volume: 285366,
    },
    {
      Date: "2024-07-31 11:00",
      Open: 222.605,
      Close: 222.54,
      High: 222.64,
      Low: 222.32,
      Volume: 369144,
    },
    {
      Date: "2024-07-31 11:05",
      Open: 222.54,
      Close: 222.73,
      High: 222.77,
      Low: 222.42,
      Volume: 238535,
    },
    {
      Date: "2024-07-31 11:10",
      Open: 222.74,
      Close: 222.535,
      High: 222.7899,
      Low: 222.3,
      Volume: 201960,
    },
    {
      Date: "2024-07-31 11:15",
      Open: 222.54,
      Close: 222.52,
      High: 222.68,
      Low: 222.39,
      Volume: 178041,
    },
    {
      Date: "2024-07-31 11:20",
      Open: 222.51,
      Close: 222.61,
      High: 222.645,
      Low: 222.3101,
      Volume: 201649,
    },
    {
      Date: "2024-07-31 11:25",
      Open: 222.61,
      Close: 223.155,
      High: 223.17,
      Low: 222.61,
      Volume: 310142,
    },
    {
      Date: "2024-07-31 11:30",
      Open: 223.155,
      Close: 223.22,
      High: 223.37,
      Low: 223.03,
      Volume: 260841,
    },
    {
      Date: "2024-07-31 11:35",
      Open: 223.2299,
      Close: 222.98,
      High: 223.2299,
      Low: 222.87,
      Volume: 196606,
    },
    {
      Date: "2024-07-31 11:40",
      Open: 222.99,
      Close: 222.585,
      High: 222.99,
      Low: 222.49,
      Volume: 198835,
    },
    {
      Date: "2024-07-31 11:45",
      Open: 222.58,
      Close: 222.42,
      High: 222.65,
      Low: 222.35,
      Volume: 238663,
    },
    {
      Date: "2024-07-31 11:50",
      Open: 222.4299,
      Close: 222.69,
      High: 222.73,
      Low: 222.35,
      Volume: 241045,
    },
    {
      Date: "2024-07-31 11:55",
      Open: 222.68,
      Close: 222.55,
      High: 222.68,
      Low: 222.47,
      Volume: 233741,
    },
    {
      Date: "2024-07-31 12:00",
      Open: 222.57,
      Close: 222.4903,
      High: 222.655,
      Low: 222.35,
      Volume: 230649,
    },
    {
      Date: "2024-07-31 12:05",
      Open: 222.5,
      Close: 222.5976,
      High: 222.6836,
      Low: 222.47,
      Volume: 156009,
    },
    {
      Date: "2024-07-31 12:10",
      Open: 222.58,
      Close: 222.61,
      High: 222.7,
      Low: 222.49,
      Volume: 129600,
    },
    {
      Date: "2024-07-31 12:15",
      Open: 222.61,
      Close: 222.57,
      High: 222.6267,
      Low: 222.48,
      Volume: 99818,
    },
    {
      Date: "2024-07-31 12:20",
      Open: 222.57,
      Close: 222.375,
      High: 222.61,
      Low: 222.35,
      Volume: 149395,
    },
    {
      Date: "2024-07-31 12:25",
      Open: 222.375,
      Close: 222.37,
      High: 222.44,
      Low: 222.17,
      Volume: 218284,
    },
    {
      Date: "2024-07-31 12:30",
      Open: 222.3836,
      Close: 222.23,
      High: 222.39,
      Low: 222.1701,
      Volume: 153205,
    },
    {
      Date: "2024-07-31 12:35",
      Open: 222.25,
      Close: 222.22,
      High: 222.38,
      Low: 222.13,
      Volume: 144217,
    },
    {
      Date: "2024-07-31 12:40",
      Open: 222.22,
      Close: 222.3,
      High: 222.38,
      Low: 222.0801,
      Volume: 119760,
    },
    {
      Date: "2024-07-31 12:45",
      Open: 222.29,
      Close: 222.53,
      High: 222.6,
      Low: 222.26,
      Volume: 111805,
    },
    {
      Date: "2024-07-31 12:50",
      Open: 222.515,
      Close: 222.52,
      High: 222.76,
      Low: 222.48,
      Volume: 259695,
    },
    {
      Date: "2024-07-31 12:55",
      Open: 222.53,
      Close: 222.54,
      High: 222.655,
      Low: 222.33,
      Volume: 204835,
    },
    {
      Date: "2024-07-31 13:00",
      Open: 222.54,
      Close: 222.68,
      High: 222.85,
      Low: 222.45,
      Volume: 214617,
    },
    {
      Date: "2024-07-31 13:05",
      Open: 222.66,
      Close: 222.61,
      High: 222.75,
      Low: 222.48,
      Volume: 218307,
    },
    {
      Date: "2024-07-31 13:10",
      Open: 222.605,
      Close: 222.7451,
      High: 222.88,
      Low: 222.52,
      Volume: 230279,
    },
    {
      Date: "2024-07-31 13:15",
      Open: 222.73,
      Close: 222.96,
      High: 223.01,
      Low: 222.71,
      Volume: 233413,
    },
    {
      Date: "2024-07-31 13:20",
      Open: 222.96,
      Close: 222.8,
      High: 222.9699,
      Low: 222.66,
      Volume: 302124,
    },
    {
      Date: "2024-07-31 13:25",
      Open: 222.8,
      Close: 222.6,
      High: 222.87,
      Low: 222.52,
      Volume: 556036,
    },
    {
      Date: "2024-07-31 13:30",
      Open: 222.595,
      Close: 221.61,
      High: 222.6,
      Low: 221.5,
      Volume: 432456,
    },
    {
      Date: "2024-07-31 13:35",
      Open: 221.61,
      Close: 221.79,
      High: 221.8297,
      Low: 221.53,
      Volume: 210449,
    },
    {
      Date: "2024-07-31 13:40",
      Open: 221.77,
      Close: 221.75,
      High: 221.91,
      Low: 221.31,
      Volume: 306050,
    },
    {
      Date: "2024-07-31 13:45",
      Open: 221.74,
      Close: 222.005,
      High: 222.05,
      Low: 221.67,
      Volume: 207168,
    },
    {
      Date: "2024-07-31 13:50",
      Open: 222,
      Close: 222.36,
      High: 222.4014,
      Low: 221.995,
      Volume: 190006,
    },
    {
      Date: "2024-07-31 13:55",
      Open: 222.34,
      Close: 222.17,
      High: 222.45,
      Low: 222.12,
      Volume: 182431,
    },
    {
      Date: "2024-07-31 14:00",
      Open: 222.19,
      Close: 222.55,
      High: 222.58,
      Low: 221.92,
      Volume: 319557,
    },
    {
      Date: "2024-07-31 14:05",
      Open: 222.53,
      Close: 222.22,
      High: 222.78,
      Low: 222.15,
      Volume: 284939,
    },
    {
      Date: "2024-07-31 14:10",
      Open: 222.225,
      Close: 222.66,
      High: 222.67,
      Low: 222.19,
      Volume: 179085,
    },
    {
      Date: "2024-07-31 14:15",
      Open: 222.6574,
      Close: 222.91,
      High: 222.93,
      Low: 222.6574,
      Volume: 174889,
    },
    {
      Date: "2024-07-31 14:20",
      Open: 222.905,
      Close: 222.94,
      High: 222.99,
      Low: 222.77,
      Volume: 162555,
    },
    {
      Date: "2024-07-31 14:25",
      Open: 222.92,
      Close: 222.94,
      High: 223.01,
      Low: 222.78,
      Volume: 149994,
    },
    {
      Date: "2024-07-31 14:30",
      Open: 222.93,
      Close: 223.18,
      High: 223.37,
      Low: 222.91,
      Volume: 361521,
    },
    {
      Date: "2024-07-31 14:35",
      Open: 223.14,
      Close: 222.795,
      High: 223.1901,
      Low: 222.33,
      Volume: 301941,
    },
    {
      Date: "2024-07-31 14:40",
      Open: 222.785,
      Close: 223.18,
      High: 223.22,
      Low: 222.7701,
      Volume: 186580,
    },
    {
      Date: "2024-07-31 14:45",
      Open: 223.17,
      Close: 223.2599,
      High: 223.3,
      Low: 222.84,
      Volume: 274968,
    },
    {
      Date: "2024-07-31 14:50",
      Open: 223.245,
      Close: 222.88,
      High: 223.3001,
      Low: 222.75,
      Volume: 205245,
    },
    {
      Date: "2024-07-31 14:55",
      Open: 222.8701,
      Close: 222.665,
      High: 222.9101,
      Low: 222.54,
      Volume: 190401,
    },
    {
      Date: "2024-07-31 15:00",
      Open: 222.665,
      Close: 222.46,
      High: 222.9,
      Low: 222.43,
      Volume: 285819,
    },
    {
      Date: "2024-07-31 15:05",
      Open: 222.42,
      Close: 222.67,
      High: 223.03,
      Low: 222.42,
      Volume: 293130,
    },
    {
      Date: "2024-07-31 15:10",
      Open: 222.66,
      Close: 222.59,
      High: 222.91,
      Low: 222.42,
      Volume: 352752,
    },
    {
      Date: "2024-07-31 15:15",
      Open: 222.6,
      Close: 221.88,
      High: 223.0199,
      Low: 221.83,
      Volume: 450110,
    },
    {
      Date: "2024-07-31 15:20",
      Open: 221.885,
      Close: 221.88,
      High: 222.29,
      Low: 221.72,
      Volume: 367275,
    },
    {
      Date: "2024-07-31 15:25",
      Open: 221.89,
      Close: 221.6101,
      High: 222.04,
      Low: 221.285,
      Volume: 670860,
    },
    {
      Date: "2024-07-31 15:30",
      Open: 221.64,
      Close: 221.78,
      High: 221.97,
      Low: 221.37,
      Volume: 394868,
    },
    {
      Date: "2024-07-31 15:35",
      Open: 221.79,
      Close: 222.2172,
      High: 222.25,
      Low: 221.7482,
      Volume: 424349,
    },
    {
      Date: "2024-07-31 15:40",
      Open: 222.215,
      Close: 222.86,
      High: 223.01,
      Low: 222.18,
      Volume: 469127,
    },
    {
      Date: "2024-07-31 15:45",
      Open: 222.84,
      Close: 222.57,
      High: 222.98,
      Low: 222.22,
      Volume: 523570,
    },
    {
      Date: "2024-07-31 15:50",
      Open: 222.55,
      Close: 222.42,
      High: 222.7,
      Low: 221.66,
      Volume: 766250,
    },
    {
      Date: "2024-07-31 15:55",
      Open: 222.42,
      Close: 222.08,
      High: 222.8258,
      Low: 221.95,
      Volume: 9957358,
    },
  ],
};