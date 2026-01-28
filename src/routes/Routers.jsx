import { Route, Routes } from "react-router-dom";

import CardsPage from "../pages/CardsPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import FavoritePage from "../pages/FavoritePage.jsx";
import MyCardsPage from "../pages/MyCardsPage.jsx";
import { ROUTES } from "./routerDict.js";
import SandBoxPage from "../sandBox/SandBoxPage.jsx";

export default function Routers() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<CardsPage />} />
      <Route path={ROUTES.about} element={<AboutPage />} />
      <Route path={ROUTES.favorite} element={<FavoritePage />} />
      <Route path={ROUTES.MyCards} element={<MyCardsPage />} />
      <Route path={ROUTES.sandBox} element={<SandBoxPage />} />
    </Routes>
  );
}
