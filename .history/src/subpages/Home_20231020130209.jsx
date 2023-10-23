import React from "react";
import { Box, CardMedia, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/1.jpeg";

const Home = () => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        px: "4rem",
        backgroundColor: grey[800],
        pt: "200px",
        
      }}
    >
      <Box>
        <CardMedia
          component="img"
          image={image1}
          alt="abc"
          sx={{ width: "48%", height: "750px" }}
        />
      </Box>
    </Box>
  );
};

export default Home;
