import { Button, TextField, Box, Typography } from "@mui/material";
import { useState } from "react";

function TextFiledUseState() {
  const [content, setContent] = useState("");
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setContent(e.target.value);
  };

  const handleOnClick = () => {
    console.log(content);
  };

  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Typography variant="h6">useState :</Typography>
      <TextField value={content} onChange={handleOnChange} />
      <Button onClick={handleOnClick} variant="contained" size="large">
        click
      </Button>
      <Typography variant="h6">{content}</Typography>
    </Box>
  );
}

export default TextFiledUseState;
