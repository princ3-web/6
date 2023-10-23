import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/7.jpg";
import image2 from "../assets/images/8.jpg";
import image3 from "../assets/images/9.jpg";
import image4 from "../assets/images/10.jpg";
import image5 from "../assets/images/1.jpg";
import image6 from "../assets/images/1.jpg";
import image7 from "../assets/images/1.jpg";
import image8 from "../assets/images/1.jpg";
import image9 from "../assets/images/1.jpg";

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
          <CardMedia alt="" component="img" image={item} sx={{ width: "32%", height: "90vh", mb: "1rem" }} />
      ))}
    </Box>
  );
};

export default Gallery;
