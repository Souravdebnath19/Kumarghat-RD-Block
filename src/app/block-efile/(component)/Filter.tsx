"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Button,
} from "@mui/material";
import { FcAddDatabase } from "react-icons/fc";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { shadows } from "@mui/system";

interface Row {
  id: number;
  fileNo: string;
  description: string;
  category: string;
  section: string;
  open: string;
  close: string;
  rackNo: number;
  remarks: string;
  link: string;
}

interface AppProps {
  rows: Row[];
  setFilteredRows: Function;
}

interface SearchParams {
  fileNo: string;
  section: string;
  open: Dayjs | null;
}

const App: React.FC<AppProps> = ({ rows, setFilteredRows }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    fileNo: "",
    section: "",
    open: null,
  });

  const handleSearchChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  const handleDateChange = (date: Dayjs | null): void => {
    setSearchParams({
      ...searchParams,
      open: date,
    });
  };

  useEffect(() => {
    const filteredRows = rows.filter((row: Row) => {
      const matchFileNo =
        searchParams.fileNo === "" || row.fileNo.includes(searchParams.fileNo);
      const matchSection =
        searchParams.section === "" || row.section === searchParams.section;
      const matchOpen =
        searchParams.open === null ||
        row.open === dayjs(searchParams.open).format("DD-MM-YYYY");
      return matchFileNo && matchSection && matchOpen;
    });
    setFilteredRows(filteredRows);
  }, [searchParams]);

  return (
    <div className="flex justify-between pb-2">
      <Typography variant="h4" className="py-6 w-1/5" gutterBottom>
        File Search
      </Typography>
      <div className="w-3/5 flex justify-between pt-6">
        <div className="w-2/5 flex-row padding-top-8px">
          <FormControl fullWidth sx={{ boxShadow: 2 }}>
            <TextField
              label="🔍 Search by File No"
              name="fileNo"
              value={searchParams.fileNo}
              onChange={handleSearchChange}
            />
          </FormControl>
        </div>
        <div className="w-1/5 flex-row padding-top-8px">
          <FormControl fullWidth>
            <InputLabel id="section-label">Section</InputLabel>
            <Select
              labelId="section-label"
              name="section"
              value={searchParams.section}
              label="Section"
              onChange={(e) =>
                handleSearchChange(e as ChangeEvent<HTMLInputElement>)
              }
            >
              <MenuItem value="" selected>
                <em>None</em>
              </MenuItem>
              <MenuItem value="Rega">Rega</MenuItem>
              <MenuItem value="Establishment">Establishment</MenuItem>
              <MenuItem value="Panchayat Samiti">Panchayat Samiti</MenuItem>
              <MenuItem value="MIS">MIS</MenuItem>
              <MenuItem value="Accounts">Account</MenuItem>
              <MenuItem value="MGNREGA">MGNREGA</MenuItem>
              <MenuItem value="RD Store">RD Store</MenuItem>
              <MenuItem value="Establishment">Establishment</MenuItem>
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Tribal Welfare">Tribal Welfare</MenuItem>
              <MenuItem value="TRLM">TRLM</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-1/5 flex-row ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="Open"
                value={searchParams.open}
                onChange={handleDateChange}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="padding-top-8px ">
          <Button variant="contained" className="">
            <span className="pr-2">ADD</span>
            <FcAddDatabase />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
