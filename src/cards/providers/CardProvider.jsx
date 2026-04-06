import { createContext, useContext, useState } from "react";
import { useUser } from "../../users/providers/UserProvider";
import normalizeCard from "../helpers/normalization/normalizeCard";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const CardContext = createContext();

export default function CardProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState();
  const { user, token } = useUser();

  // ✔️✔️✔️GET CARDS ✔️✔️✔️
  const getCardsFromServer = async () => {
    const response = await axios.get("http://localhost:3000/cards");
    console.log(response);

    setCards(response.data);
    console.log("Ill be second!");
  };

  // ✔️✔️✔️CREATE CARD ✔️✔️✔️
  const handleSubmitCreateCard = async (data) => {
    const cardDetailsForServer = normalizeCard(data);

    try {
      console.log("data for server", cardDetailsForServer);
      const response = await axios.post(
        "http://localhost:3000/cards",
        cardDetailsForServer,
        { headers: { "x-auth-token": token } },
      );
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      console.log(response);
      getCardsFromServer();
      setIsDialogOpen(false);
      setCard(null);
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  };

  // ✔️✔️✔️GET  CARD  BY ID✔️✔️✔️
  const handleGetCardByID = async (cardID) => {
    try {
      const response = await axios.get(`http://localhost:3000/cards/${cardID}`);
      console.log(response);
      setCard(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ✔️✔️✔️UPDATE CARD ✔️✔️✔️
  const handleSubmitUpdateCard = async (data, id) => {
    // 1. נרמול הנתונים לפני השליחה לשרת
    const cardDetailsForServer = normalizeCard(data);

    try {
      // 2. שליחת בקשת PUT לשרת עם הנתונים והטוקן
      const response = await axios.put(
        `http://localhost:3000/cards/${id}`,
        cardDetailsForServer,
        { headers: { "x-auth-token": token } },
      );
      console.log("Update response:", response);

      // 3. רענון רשימת הכרטיסים כדי שנראה את העדכון
      getCardsFromServer();
      setIsEditDialogOpen(false);

      // אופציונלי: אפשר להוסיף פה Alert של הצלחה
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        alert(error.response.data);
      } else {
        console.log(error);
      }
    }
  };

  // ✔️✔️✔️LIKE CARD ✔️✔️✔️
  const handleLikeCard = async (cardID) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/cards/${cardID}/likes/${user._id}`,
        {},
        { headers: { "x-auth-token": token } },
      );
      console.log(user);
      console.log(response);
      getCardsFromServer();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        alert(error.response.data.message);
      }
    }
  };

  return (
    <CardContext.Provider
      value={{
        handleSubmitCreateCard,
        getCardsFromServer,
        cards,
        handleLikeCard,
        isDialogOpen,
        setIsDialogOpen,
        handleGetCardByID,
        handleSubmitUpdateCard,
        card,
        setCard,
        setIsEditDialogOpen,
        isEditDialogOpen,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("You used the message context of the message provider!");
  }
  return context;
};
