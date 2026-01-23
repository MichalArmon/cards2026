import { Route, Routes } from "react-router-dom";

import CardsPage from "../pages/CardsPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import FavoritePage from "../pages/FavoritePage.jsx";
import MyCardsPage from "../pages/MyCardsPage.jsx";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<CardsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/my-cards" element={<MyCardsPage />} />
    </Routes>
  );
}
