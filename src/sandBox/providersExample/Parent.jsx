import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [msg, setMsg] = useState("Im the message from the parent!");
  return (
    <div>
      <h2>This is the parent!</h2>
      <Child msg={msg} />
    </div>
  );
}

export default Parent;
