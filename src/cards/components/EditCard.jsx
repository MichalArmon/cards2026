import editCardInitialValues from "../helpers/initialValues/editCardInitialValues";
import { useCard } from "../providers/CardProvider";
import CardForm from "./CardForm";

function EditCard() {
  const { card, handleSubmitUpdateCard } = useCard();
  if (!card) {
    return <div>Loading...</div>;
  }

  const onEditSubmit = (formDetails) => {
    handleSubmitUpdateCard(formDetails, card._id);
  };
  return (
    <>
      {" "}
      <CardForm
        buttonText="Edit card"
        initialValues={editCardInitialValues(card)}
        handleSubmitForForm={onEditSubmit}
      />
    </>
  );
}

export default EditCard;
