import { useCallback, useMemo, useState } from "react";
import ChildrenOfCounter from "./ChildrenOfCounter";
import { Button, Box, Typography, Divider, Container } from "@mui/material";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleIncreaseCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecreaseCounter = () => {
    setCounter((prev) => prev - 1);
  };
  const OBJ = useMemo(() => ({ firstName: "michal", lastName: "armon" }), []);
  const doSomething = useCallback(() => {
    console.log("hello");
  }, []);

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box>
        <Button onClick={handleIncreaseCounter} variant="contained">
          +
        </Button>
        <Typography variant="h6" sx={{ p: 2 }} component="span">
          {counter}
        </Typography>
        <Button onClick={handleDecreaseCounter} variant="contained">
          -
        </Button>
      </Box>
      <ChildrenOfCounter OBJ={OBJ} doSomething={doSomething} />
      <Divider />
    </Container>
  );
}

export default Counter;
