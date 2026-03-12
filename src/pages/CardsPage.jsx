import React, { useEffect } from "react";
import BCards from "../cards/components/BCards";
import { useCard } from "../cards/providers/CardProvider";

export default function CardsPage() {
  const { cards, getCardsFromServer } = useCard();
  useEffect(() => {
    getCardsFromServer();
    console.log(cards);
  }, []);
  return (
    <>
      <div>CardsPage</div>
      <BCards cards={cards} />
    </>
  );
}
