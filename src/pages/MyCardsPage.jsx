import React from "react";
import TitlePage from "../components/TitlePage";
import CardForm from "../cards/components/CardForm";

export default function MyCardsPage() {
  return (
    <>
      <TitlePage Children="My cards " />
      <CardForm />
    </>
  );
}
