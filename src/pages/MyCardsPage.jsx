import React, { useEffect, useState } from "react";
import TitlePage from "../components/TitlePage";
import CardForm from "../cards/components/CardForm";
import Form from "../form/components/Form";
import BCards from "../cards/components/BCards";
import { useCard } from "../cards/providers/CardProvider";
import { useUser } from "../users/providers/UserProvider";

import {
  Typography,
  Fab,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import CreateCard from "../cards/components/CreateCard";

export default function MyCardsPage() {
  const { cards, getCardsFromServer, isDialogOpen, setIsDialogOpen } =
    useCard();

  const { user } = useUser();

  useEffect(() => {
    getCardsFromServer();
  }, []);

  const [filterMyCards, setFilterMyCards] = useState([]);

  useEffect(() => {
    if (user && cards && cards.length > 0) {
      const filtered = cards.filter((card) => {
        // חשוב: לפי MongoDB הצילום ששלחת, השדה הוא user_id
        return card.user_id && String(card.user_id) === String(user._id);
      });
      setFilterMyCards(filtered);
    }
  }, [cards, user]);
  console.log(filterMyCards);

  return (
    <Box sx={{ position: "relative", minHeight: "80vh" }}>
      <TitlePage Children="My cards " />

      <BCards cards={filterMyCards} />
      <Fab
        sx={{ position: "fixed", bottom: 20, right: 20 }}
        color="primary"
        onClick={() => {
          setIsDialogOpen(true);
        }}
      >
        <Add />
      </Fab>
      <Dialog
        open={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
        }}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Create New Business Card</DialogTitle>
        <DialogContent dividers>
          {" "}
          <Form title="create new card">
            <CreateCard />
          </Form>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
