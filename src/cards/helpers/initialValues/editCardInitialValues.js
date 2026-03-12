export default function editCardInitialValues(card) {
  const cardInitialValues = {
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    web: card.web,

    imageUrl: card.image.url,

    addressState: card.address.state,
    addressCountry: card.address.country,
    addressCity: card.address.city,
    addressStreet: card.address.street,
    addressHouseNumber: card.address.houseNumber,
    addressZip: card.address.zip,
  };
  return cardInitialValues;
}
