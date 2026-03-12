import React, { useEffect } from "react";
import { useUser } from "../users/providers/UserProvider";
import BCards from "../cards/components/BCards";
import { useCard } from "../cards/providers/CardProvider";
import { useState } from "react";
import TitlePage from "../components/TitlePage";

export default function FavoritePage() {
  const { cards, getCardsFromServer } = useCard();
  const { user } = useUser();

  useEffect(() => {
    if (!cards || cards.length === 0) {
      getCardsFromServer();
    }
  }, []);

  const [myFavCards, setMyFavCards] = useState([]);

  useEffect(() => {
    if (user && cards) {
      const filtered = cards.filter((card) => {
        return card.likes.includes(user._id);
      });
      setMyFavCards(filtered);
    }
  }, [cards, user]);
  console.log(myFavCards);

  return (
    <>
      <TitlePage Children="My Favorite cards " />

      <BCards cards={myFavCards} />
    </>
  );
}
