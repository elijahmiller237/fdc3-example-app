import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Highcharts from "highcharts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { TickerGrid } from "./TickerGrid";
import { NewsView } from "./NewsView";
import { ChartView } from "./ChartView";
import { IntradayChartView } from "./IntradayChartView";
import applyTheme from "highcharts/themes/high-contrast-dark";
import stock from "highcharts/modules/stock";
import { ProfileView } from "./ProfileView";
import { ChannelView } from "./ChannelView";

applyTheme(Highcharts);
stock(Highcharts);

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/ticker-grid", element: <TickerGrid /> },
  { path: "/news-view", element: <NewsView /> },
  { path: "/chart-view", element: <ChartView /> },
  { path: "/intraday-chart-view", element: <IntradayChartView /> },
  { path: "/profile-view", element: <ProfileView /> },
  { path: "/channel-view-1", element: <ChannelView title="Channel View 1" /> },
  { path: "/channel-view-2", element: <ChannelView title="Channel View 2" /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
