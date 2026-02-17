import { useMessage } from "../providers/SpecialMessageProvider";
import GrandChild from "./GrandChild";

function Child({ msg }) {
  const specialMessage = useMessage();
  return (
    <div>
      <h3>This is the child!</h3>
      <h3>{specialMessage}</h3>
      <GrandChild msg={msg} />
    </div>
  );
}

export default Child;
