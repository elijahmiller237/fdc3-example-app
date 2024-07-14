import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import styled from "@emotion/styled";
import { useStocksList } from "../hooks";
import { TICKER_GRID_COL_DEFS, TICKER_GRID_DEFAULT_COL_DEF } from "./constants";
import { useEffect } from "react";

export const TickerGrid = () => {
  const { stocks, refresh } = useStocksList();

  useEffect(() => {
    refresh();
  }, []);

  return (
    <GridContainer className="ag-theme-balham-dark">
      <AgGridReact
        columnDefs={TICKER_GRID_COL_DEFS}
        rowData={stocks}
        defaultColDef={TICKER_GRID_DEFAULT_COL_DEF}
        onCellDoubleClicked={() => console.log("foo")}
      />
    </GridContainer>
  );
};

const GridContainer = styled("div")({
  height: "100%",
  width: "100%",
});
