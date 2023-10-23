import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/1.jpg";

const Gallery = () => {
  const images = [image1, image1, image1, image1, image1, image1];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "100vw",
        boxSizing: "border-box",
        px: "3rem",
        backgroundColor: grey[900],
        pt: "200px",
        pb: "50px",
      }}
    >
      {images.map((item) => (
        <Box sx={{ width: "33%", height: "90vh", border:"1px solid red" }}>
          <CardMedia alt="" component="img" image={item} sx={{ width: "98%", height: "98%" }} />
        </Box>
      ))}
    </Box>
  );
};

export default Gallery;
