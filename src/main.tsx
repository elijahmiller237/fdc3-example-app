import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { TickerGrid } from "./TickerGrid";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/ticker-grid", element: <TickerGrid /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
