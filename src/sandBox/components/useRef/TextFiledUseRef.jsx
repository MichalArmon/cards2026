import { Button, TextField, Box, Typography } from "@mui/material";
import { useRef } from "react";

function TextFiledUseRef() {
  const inputRef = useRef();

  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Typography variant="h6">useRef :</Typography>
      <TextField inputRef={inputRef} />
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        click
      </Button>
    </Box>
  );
}

export default TextFiledUseRef;
