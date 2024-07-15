import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { TickerGrid } from "./TickerGrid";
import { NewsView } from "./NewsView";
import { ChartView } from "./ChartView";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/ticker-grid", element: <TickerGrid /> },
  { path: "/news-view", element: <NewsView /> },
  { path: "/chart-view", element: <ChartView /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
