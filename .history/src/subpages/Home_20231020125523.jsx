import React from "react";
import { Box, CardMedia, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/1.jpeg"

const Home = () => {
  return <Box sx={{ backgroundColor: grey[800], height: "110vh" }}>
    <CardMedia component="img" image={image1} alt="abc" sx={{width:"48"}}  />
  </Box>;
};

export default Home;
