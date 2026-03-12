import { Box, Grid, Typography, Container, Pagination } from "@mui/material";
import React, { memo, useState } from "react";
import BCard from "./BCard";

function BCards({ cards }) {
  const [page, setPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const safeCards = cards || [];
  const pageCount = Math.ceil(safeCards.length / cardsPerPage);

  const handleChangePage = (event, nextPage) => {
    setPage(nextPage);
  };

  if (!safeCards.length) {
    return (
      <Box>
        <Typography>Loading or no cards found...</Typography>
      </Box>
    );
  }
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Grid
        display="flex"
        container
        spacing={4}
        alignItems="stretch"
        sx={{ justifyContent: "center" }}
      >
        {safeCards
          .slice((page - 1) * cardsPerPage, page * cardsPerPage)
          .map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card._id}>
              <BCard
                likes={card.likes}
                key={card._id}
                cardID={card._id}
                title={card.title}
                subheader={card.subtitle}
                description={card.description}
                image={card.image.url}
                phone={card.phone}
                address={`${card.address.street} ${card.address.houseNumber} st | ${card.address.city} | ${card.address.country} `}
                email={card.email}
              />
            </Grid>
          ))}
      </Grid>
      {pageCount > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            mt: 3,
          }}
        >
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChangePage}
          />
        </Box>
      )}
    </Container>
  );
}
export default memo(BCards);
