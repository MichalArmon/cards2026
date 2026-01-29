import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Paper,
  Button,
  IconButton,
  TextField,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import useCountries from "../hooks/useCountries";
const top = 55;

export default function DeconstructedCountryList() {
  const {
    countries,
    page,
    handleChange,
    rowPerPage,
    handleChangePage,
    filteredCountries,
    sortOrder,
    handleChangeRowForPage,
    handleSortFirstName,
  } = useCountries();
  if (countries === 0) {
    <Typography>NO Countries to show!</Typography>;
  }
  return (
    <>
      {/* <Box>
        <Typography variant="h2">CountryList</Typography>
        <List disablePadding>
          {countries.map((c, i) => (
            <ListItem disableGutters key={i}>
              <Typography>
                {i + 1} {c.name.official}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box> */}
      <Box sx={{ mb: 3 }}>
        <TextField onChange={handleChange} />
      </Box>
      <TableContainer
        sx={{ width: "80vw", maxHeight: "90vh ", margin: "0 auto" }}
      >
        <Table
          size="small"
          stickyHeader
          sx={{
            width: "100%",
            tableLayout: "fixed",
            "& .MuiTableCell-root": { textAlign: "center" },
          }}
        >
          <TableHead
            sx={{
              "& .MuiTableCell-head": {
                position: "sticky",
                backgroundColor: "#fff",
                zIndex: 10,
                fontWeight: 600,
                fontSize: 18,
              },
            }}
          >
            <TableRow
              sx={{
                "& .MuiTableCell-root": {
                  bgcolor: "primary.light",
                  color: "white",
                },
              }}
            >
              <TableCell
                align="center"
                colSpan={6}
                sx={{ zIndex: 20, borderWidth: 3 }}
              >
                <Typography variant="h5" sx={{}}>
                  country List
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{
                "& .MuiTableCell-root": {
                  bgcolor: "secondary.light",
                  fontSize: "1.2rem",
                },
              }}
            >
              <TableCell sx={{ top: { top } }}>
                Name
                <IconButton onClick={handleSortFirstName}>
                  {sortOrder === "asc" ? (
                    <KeyboardArrowDown />
                  ) : (
                    <KeyboardArrowUp />
                  )}
                </IconButton>
              </TableCell>
              <TableCell sx={{ top: { top } }}>Capital</TableCell>
              <TableCell sx={{ top: { top } }}>Currency</TableCell>
              <TableCell sx={{ top: { top } }}>Language</TableCell>
              <TableCell sx={{ top: { top } }}>Country code</TableCell>
              <TableCell sx={{ top: { top } }}>Flag</TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              " & .MuiTableCell-root": {
                borderColor: "secondary.light",
                fontFamily: "verdana",
                fontSize: "1rem",
              },
              bgcolor: "white",
            }}
          >
            {filteredCountries
              .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
              .map((country, i) => (
                <TableRow
                  key={i}
                  sx={{ bgcolor: i % 2 === 0 ? "pink" : "lightblue" }}
                >
                  <TableCell>{country.name.official}</TableCell>
                  <TableCell>{country.capital[0]}</TableCell>
                  <TableCell>
                    {country.currencies
                      ? Object.values(country.currencies)[0]?.name
                      : ""}
                  </TableCell>
                  <TableCell>
                    {Object.values(country.languages).join(" ,")}
                  </TableCell>
                  <TableCell>{country.cca2}</TableCell>
                  <TableCell>
                    <Box sx={{ width: "100px", margin: "0 auto" }}>
                      <img style={{ width: "100%" }} src={country.flags.png} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={countries.length}
          rowsPerPage={rowPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowForPage}
        />
      </TableContainer>
    </>
  );
}
