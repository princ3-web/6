import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/image1.jpg";

const Gallery = () => {

  const images = [image1, image1, image1, image1]

  return (
    <Box
      sx={{
        width: "100vw",
        boxSizing: "border-box",
        px: "3rem",
        backgroundColor: grey[900],
        pt: "200px",
        pb: "50px",
      }}
    >
      <

    </Box>
  );
};

export default Gallery;
