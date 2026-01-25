import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function CountryList() {
  const [countries, setCountries] = useState([]);

  const getCountriesFromServer = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name",
    );
    const json = await response.json();
    setCountries(json);
  };

  useEffect(() => {
    getCountriesFromServer();
  }, []);

  if (countries === 0) {
    <Typography>NO Countries to show!</Typography>;
  }
  return (
    <Box>
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
    </Box>
  );
}
