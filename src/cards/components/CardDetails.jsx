import {
  Button,
  Box,
  Card,
  Container,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";

function CardDetails() {
  const [card, setCard] = useState(null);
  const { id } = useParams();
  const gatCardFromServer = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cards/${id}`);
      console.log(response);
      setCard(response.data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    gatCardFromServer();
  }, [id]);

  if (!card) {
    return (
      <Box>
        <Spinner />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Card sx={{ boxShadow: 3 }}>
        {/* תמונת הכרטיס */}
        <CardMedia
          component="img"
          height="400"
          image={card.image.url}
          alt={card.image.alt}
        />

        {/* תוכן הכרטיס */}
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            {card.title}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {card.subtitle}
          </Typography>

          <Typography variant="body1" sx={{ mt: 3, mb: 3 }}>
            {card.description}
          </Typography>

          {/* פרטי קשר */}
          <Box sx={{ bgcolor: "#f5f5f5", p: 2, borderRadius: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Phone: {card.phone}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Email: {card.email}
            </Typography>
            <Typography variant="body2">
              Address: {card.address.street} {card.address.houseNumber},{" "}
              {card.address.city}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CardDetails;
