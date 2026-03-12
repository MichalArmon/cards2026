import cardInitialValues from "../helpers/initialValues/cardInitialValues";
import { useCard } from "../providers/CardProvider";

import CardForm from "./CardForm";

function CreateCard() {
  const { handleSubmitCreateCard } = useCard();
  return (
    <>
      <CardForm
        buttonText="Create Card"
        initialValues={cardInitialValues}
        handleSubmitForForm={handleSubmitCreateCard}
      />
    </>
  );
}

export default CreateCard;
