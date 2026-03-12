import {
  CardActions,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Close, Edit, Favorite } from "@mui/icons-material";
import { useState } from "react";
import { useCard } from "../../providers/CardProvider";
import { useUser } from "../../../users/providers/UserProvider";

import EditCard from "../EditCard";

export default function BCardFooter({ cardID, likes }) {
  const { user } = useUser();

  const [isLiked, setIsLiked] = useState(
    user ? likes.includes(user._id) : false,
  );
  const {
    handleLikeCard,
    card,
    setCard,
    handleGetCardByID,
    setIsEditDialogOpen,
    isEditDialogOpen,
  } = useCard();
  if (!card) {
    handleGetCardByID(cardID);
  }

  const handleClose = () => {
    setIsEditDialogOpen(false);
    // מנקים את הסטייט כדי שהפתיחה הבאה תהיה נקייה
    if (setCard) setCard(null);
  };

  return (
    <CardActions disableSpacing sx={{ mt: "auto" }}>
      <IconButton
        aria-label="add to favorites"
        onClick={() => {
          (handleLikeCard(cardID), setIsLiked((prev) => !prev));
        }}
      >
        <Favorite color={isLiked ? "error" : ""} />
      </IconButton>
      <IconButton
        aria-label="edit card"
        onClick={() => {
          setIsEditDialogOpen(true);
        }}
      >
        <Edit />
      </IconButton>
      <Dialog
        open={isEditDialogOpen}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {card ? "Edit Card" : "Create New Card"}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {card ? (
            <EditCard handleClose={handleClose} />
          ) : (
            <div>Here goes your CreateCard component</div>
          )}
        </DialogContent>
      </Dialog>
    </CardActions>
  );
}
