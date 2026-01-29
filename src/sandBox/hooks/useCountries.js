import { useEffect, useState } from "react";

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleChangeRowForPage = (event) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (event, nextPage) => {
    setPage(nextPage);
  };

  const getCountriesFromServer = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,currencies,capital,languages,cca2,flags",
    );
    const json = await response.json();
    setCountries(json);
    setFilteredCountries(json);
    console.log(json);
  };

  useEffect(() => {
    getCountriesFromServer();
  }, []);

  const handleSortFirstName = () => {
    const sorted = [...countries].sort((a, b) => {
      const nameA = a.name.official;
      const nameB = b.name.official;
      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    setCountries(sorted);
    setFilteredCountries(sorted);
    setPage(0);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    console.log(value);
    setPage(0);
    setFilteredCountries(
      countries.filter((country) =>
        country.name.official.toLowerCase().trim().includes(value),
      ),
    );
  };

  return {
    page,
    rowPerPage,
    countries,
    filteredCountries,
    sortOrder,
    handleChange,
    handleChangePage,
    handleChangeRowForPage,
    handleSortFirstName,
  };
}
