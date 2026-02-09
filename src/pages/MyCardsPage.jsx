import React from "react";
import TitlePage from "../components/TitlePage";
import CardForm from "../cards/components/CardForm";
import Form from "../form/components/Form";

export default function MyCardsPage() {
  return (
    <>
      <TitlePage Children="My cards " />
      <Form title="create new card">
        <CardForm />
      </Form>
    </>
  );
}
