import { CustomCellRendererProps } from "ag-grid-react";
import { useCallback, useMemo, useState } from "react";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import DatasetOutlinedIcon from "@mui/icons-material/DatasetOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import styled from "@emotion/styled";

type TickerGridCellRendererProps = CustomCellRendererProps;

export const TickerGridCellRenderer = ({
  value,
  data,
}: TickerGridCellRendererProps) => {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const menuTitle = useMemo(() => data["symbol"] ?? "", [data]);

  const handleContextMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu((prev) =>
      prev === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  }, []);

  const handleClose = useCallback(() => setContextMenu(null), []);

  return (
    <div onContextMenu={handleContextMenu}>
      {value}
      <StyledMenu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem style={{ pointerEvents: "none" }}>{menuTitle}</MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DatasetOutlinedIcon fontSize="small" />
          </ListItemIcon>
          View Ticker Data
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <NewspaperOutlinedIcon fontSize="small" />
          </ListItemIcon>
          View Ticker News
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <TimelineOutlinedIcon fontSize="small" />
          </ListItemIcon>
          View Ticker Chart
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

const StyledMenu = styled(Menu)({
  ".MuiPaper-root": {
    backgroundColor: "#2D3436",
  },
  ".MuiMenuItem-root": {
    fontFamily: "Segoe UI",
    color: "white",
    fontSize: "14px",
    padding: "4px 16px",
    display: "flex",
    gap: "8px",
  },
  ".MuiMenuItem-root:hover": {
    backgroundColor: "#262C2E",
  },
  ".MuiListItemIcon-root": {
    color: "white",
    minWidth: "0px !important",
  },
});
