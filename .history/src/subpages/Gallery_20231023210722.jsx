import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/7.jpg";
import image2 from "../assets/images/8.jpg";
import image3 from "../assets/images/9.jpg";
import image4 from "../assets/images/10.jpg";
import image5 from "../assets/images/11.jpg";
import image6 from "../assets/images/12.jpg";
import image7 from "../assets/images/13.jpg";
import image8 from "../assets/images/14.jpg";
import image9 from "../assets/images/15.jpg";
import Animated from "../components/Animated";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

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
        <Box sx={{ width: "32%", height: "90vh", mb: "1rem" }}>
        <Animated>
          <CardMedia </Box>alt="" component="img" image={item}  />
          </Animated>
      ))}
    </Box>
  );
};

export default Gallery;
