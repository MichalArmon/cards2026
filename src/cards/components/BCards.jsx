import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BCard from "./BCard";

// const cards = [
//   {
//     title: "Yoga Studio Tel Aviv",
//     subtitle: "Vinyasa & Flow Classes",
//     description:
//       "A boutique yoga studio offering daily vinyasa and flow classes for all levels, focusing on movement, breath, and balance.",
//     phone: "03-5551234",
//     email: "info@yogastudio.co.il",
//     webUrl: "https://www.urbancoffee.com",
//     imageUrl:
//       "https://images.pexels.com/photos/35762818/pexels-photo-35762818.jpeg",
//     imageAlt: "Yoga studio interior with mats and natural light",
//     state: "",
//     country: "Israel",
//     city: "Tel Aviv",
//     street: "Dizengoff",
//     houseNumber: 120,
//     zip: 6433220,
//   },

//   {
//     title: "Urban Coffee Bar",
//     subtitle: "Specialty Coffee & Pastries",
//     description:
//       "An urban coffee bar serving specialty coffee beans, fresh pastries, and a cozy place to work or relax.",
//     phone: "02-6738899",
//     email: "contact@urbancoffee.com",
//     webUrl: "https://www.urbancoffee.com",
//     imageUrl:
//       "https://images.pexels.com/photos/35101541/pexels-photo-35101541.jpeg",
//     imageAlt: "Coffee bar counter with espresso machine",
//     state: "",
//     country: "Israel",
//     city: "Jerusalem",
//     street: "Jaffa",
//     houseNumber: 45,
//     zip: 9438301,
//   },

//   {
//     title: "Digital Design Studio",
//     subtitle: "Branding & Web Design",
//     description:
//       "A creative digital design studio specializing in branding, UI/UX design, and modern responsive websites.",
//     phone: "09-7712345",
//     email: "studio@digitaldesign.io",
//     webUrl: "https://www.digitaldesign.io",
//     imageUrl:
//       "https://images.pexels.com/photos/35620441/pexels-photo-35620441.jpeg",
//     imageAlt: "Designer workspace with laptop and color palette",
//     state: "",
//     country: "Israel",
//     city: "Herzliya",
//     street: "HaShunit",
//     houseNumber: 3,
//     zip: 4672403,
//   },

//   {
//     title: "Physiotherapy Clinic",
//     subtitle: "Rehabilitation & Sports Therapy",
//     description:
//       "Professional physiotherapy clinic providing rehabilitation, sports injury treatment, and posture correction.",
//     phone: "04-8667788",
//     email: "clinic@physio-care.co.il",
//     webUrl: "https://www.physio-care.co.il",
//     imageUrl:
//       "https://images.pexels.com/photos/14686356/pexels-photo-14686356.jpeg",
//     imageAlt: "Physiotherapy treatment room with equipment",
//     state: "",
//     country: "Israel",
//     city: "Haifa",
//     street: "Horev",
//     houseNumber: 18,
//     zip: 3435609,
//   },
// ];

export default function BCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://cardsserver-8uqn.onrender.com/cards")
      .then((res) => res.json())
      .then((json) => setCards(json));
  }, []);

  if (cards.length === 0) {
    return (
      <Box>
        <Typography>No cards to Show!</Typography>
      </Box>
    );
  }
  return (
    <Grid display="flex" container spacing={4} alignItems="stretch">
      {cards.map((card) => (
        <Grid item>
          <BCard
            key={card._id}
            title={card.title}
            subheader={card.subtitle}
            description={card.description}
            image={card.image.url}
            phone={card.phone}
            address={`${card.address.street} ${card.address.houseNumber} st | ${card.address.city} | ${card.address.country} `}
            email={card.email}
          />
        </Grid>
      ))}
    </Grid>
  );
}
