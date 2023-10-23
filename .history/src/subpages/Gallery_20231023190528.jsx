import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const Gallery = () => {
  return (
    <Box
      sx={{
        w
        boxSizing: "border-box",
        px: "3rem",
        backgroundColor: grey[900],
        pt: "200px",
        pb: "50px",
      }}
    >
      Gallery
    </Box>
  );
};

export default Gallery;
