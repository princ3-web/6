import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/1.jpg";

const Gallery = () => {
  const images = [image1,];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        boxSizing: "border-box",
        px: "3rem",
        backgroundColor: grey[900],
        pt: "200px",
        pb: "50px",
      }}
    >
      {images.map((item) => (
        <CardMedia
          alt=""
          component="img"
          image={item}
          sx={{ width: "32%", height: "600px" }}
        />
      ))}
    </Box>
  );
};

export default Gallery;
