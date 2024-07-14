import { ColDef } from "ag-grid-community";
import { TickerGridCellRenderer } from "./TickerGridCellRenderer";

export const TICKER_GRID_COL_DEFS: ColDef[] = [
  {
    field: "symbol",
    headerName: "Symbol",
  },
  {
    field: "name",
    headerName: "Name",
  },
  {
    field: "currency",
    headerName: "Currency",
  },
  {
    field: "mic_code",
    headerName: "MIC Code",
  },
  {
    field: "country",
    headerName: "Country",
  },
  {
    field: "type",
    headerName: "Type",
  },
];

export const TICKER_GRID_DEFAULT_COL_DEF: ColDef = {
  cellRenderer: TickerGridCellRenderer,
};
