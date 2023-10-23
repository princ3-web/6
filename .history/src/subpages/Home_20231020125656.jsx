import React from "react";
import { Box, CardMedia, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/1.jpeg"

const Home = () => {
  return <Box sx={{ boxSizing:"border-box", px: "43" backgroundColor: grey[800], height: "110vh", pt: "120px" }}>
    <CardMedia component="img" image={image1} alt="abc" sx={{width:"400px", height:"600px"}}  />
  </Box>;
};

export default Home;
