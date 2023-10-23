import React from "react";
import { Box, CardMedia, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/1.jpeg"

const Home = () => {
  return <Box sx={{ backgroundColor: grey[800], height: "110vh" }}>
    <CardMedia component= image={image1} alt="abc" width={"200px"}  />
    {/* <CardMedia component="img" alt="Card Image" image={image2} /> */}
  </Box>;
};

export default Home;
