import { Box, Pagination } from "@mui/material";
import React from "react";

export default function PaginationCard({ cardsPerPage, page }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Pagination count={10} />
    </Box>
  );
}
