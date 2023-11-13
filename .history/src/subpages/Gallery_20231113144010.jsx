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

const Gallery = ({ isMobile }) => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "100%",
        boxSizing: "border-box",
        px: isMobile ? "1rem" : "3rem",
        backgroundColor: grey[900],
        pt: isMobile ? "100px" : "200px",
        pb: "50px",
      }}
    >
      {images.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: isMobile ? "100%" : "30%",
            height: isMobile ? "50vh" : "90vh",
            mb: isMobile ? "1rem" : 0,
            overflow: "hidden",
          }}
        >
          <Animated>
            <CardMedia alt="" component="img" image={item} sx={{ filter: "saturate(1)" }} />
          </Animated>
        </Box>
      ))}
    </Box>
  );
};

export default Gallery;
