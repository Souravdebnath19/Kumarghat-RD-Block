"use client";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";
import { LuExternalLink } from "react-icons/lu";

interface Row {
  id: number;
  fileNo: string;
  description: string;
  category: string;
  gpname: string;
  open: string;
  close: string;
  rackNo: number;
  remarks: string;
  link: string;
}

const columns: GridColDef[] = [
  {
    field: "id",
    headerClassName: "super-app-theme--header bold",
    headerName: "ID",
    width: 70,
  },
  {
    field: "fileNo",
    headerClassName: "super-app-theme--header",
    headerName: "File No.",
    width: 300,
  },
  {
    field: "description",
    headerClassName: "super-app-theme--header",
    headerName: "Description",
    minWidth: 250,
    flex: 1,
  },
  {
    field: "category",
    headerClassName: "super-app-theme--header",
    headerName: "Category",
    width: 130,
  },
  {
    field: "gpname",
    headerClassName: "super-app-theme--header",
    headerName: "GPname",
    width: 200,
  },
  {
    field: "open",
    headerClassName: "super-app-theme--header",
    headerName: "Open",
    width: 150,
  },
  {
    field: "close",
    headerClassName: "super-app-theme--header",
    headerName: "Close",
    width: 150,
  },
  {
    field: "rackNo",
    headerClassName: "super-app-theme--header",
    headerName: "Rack No.",
    width: 130,
  },
  {
    field: "remarks",
    headerClassName: "super-app-theme--header",
    headerName: "Remarks",
    width: 130,
  },
  {
    field: "Download",
    headerClassName: "super-app-theme--header",
    headerName: "Download",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <div className="flex pl-5 items-center h-full">
        <a href={params.row.link} target="_blank" rel="noopener noreferrer">
          <LuExternalLink />
        </a>
      </div>
    ),
  },
];

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));

export default function DataTable({ rows }: { rows: Row[] }) {
  return (
    <div style={{ height: "78vh", width: "100%" }}>
      <StripedDataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        sx={{
          "& .super-app-theme--header": {
            backgroundColor: "#BBE9FF",
          },
        }}
      />
    </div>
  );
}
