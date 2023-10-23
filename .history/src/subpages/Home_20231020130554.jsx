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
        pb: "50px"
      }}
    >
      <Box sx={{display:"flex"}}>
        <CardMedia
          component="img"
          image={image1}
          alt="abc"
          sx={{ width: "50%", height: "750px" }}
        />
        <Box sx>
        <Typography color={grey[100]} sx={{ p:"5rem", fontSize:"72px"}}>
        Alejandra Cruz is a singer and songwriter from Barcelona, Spain.
        </Typography>
        <Typography color={grey[100]} variant="h3" sx={{ width: "50%", p:"5rem"}}>
        Alejandra Cruz is a singer and songwriter from Barcelona, Spain.
        </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
