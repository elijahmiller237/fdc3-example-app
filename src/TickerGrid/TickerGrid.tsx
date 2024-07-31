import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import styled from "@emotion/styled";
import { useStocksList } from "../hooks";
import { TICKER_GRID_COL_DEFS, TICKER_GRID_DEFAULT_COL_DEF } from "./constants";
import { useCallback, useEffect } from "react";
import { CellDoubleClickedEvent } from "ag-grid-community";
import { getOrCreateChannel } from "@finos/fdc3";

export const TickerGrid = () => {
  const { stocks, refresh } = useStocksList();

  const handleCellDoubleClicked = useCallback(
    async (event: CellDoubleClickedEvent) => {
      if (event.colDef.field === "symbol") {
        const channel = await getOrCreateChannel("currentTicker");
        channel.broadcast({
          type: "changeTicker",
          id: { ticker: event.value },
        });
      }
    },
    []
  );

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <GridContainer className="ag-theme-balham-dark">
      <AgGridReact
        columnDefs={TICKER_GRID_COL_DEFS}
        rowData={stocks}
        defaultColDef={TICKER_GRID_DEFAULT_COL_DEF}
        onCellDoubleClicked={handleCellDoubleClicked}
      />
    </GridContainer>
  );
};

const GridContainer = styled("div")({
  height: "100%",
  width: "100%",
});
