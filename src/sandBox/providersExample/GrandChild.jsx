function GrandChild({ msg }) {
  return (
    <div>
      <h4>This is the grandchild!</h4>
      <h1>{`this is a message from the parent: ${msg}`}</h1>
    </div>
  );
}

export default GrandChild;
