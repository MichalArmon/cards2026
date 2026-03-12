const normalizeCard = (data) => {
  const cardDetailsForServer = {
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    phone: data.phone,
    email: data.email,
    web: data.web,

    image: {
      url: data.imageUrl,
      alt: data.imageAlt,
    },
    address: {
      state: data.addressState,
      country: data.addressCountry,
      city: data.addressCity,
      street: data.addressStreet,
      houseNumber: data.addressHouseNumber,
      zip: data.addressZip,
    },
  };
  return cardDetailsForServer;
};
export default normalizeCard;
