import React from "react";
import { Box, CardMedia, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/1.jpeg";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          boxSizing: "border-box",
          px: "3rem",
          backgroundColor: grey[800],
          pt: "200px",
          pb: "50px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={image1}
            alt="abc"
            sx={{ width: "50%", height: "800px" }}
          />
          <Box sx={{ width: "50%" }}>
            <Typography color={grey[100]} sx={{ px: "5rem", pt: "5rem", fontSize: "70px" }}>
              Alejandra Cruz is a singer and songwriter from Barcelona, Spain.
            </Typography>
            <Typography color={grey[100]} variant="h5" sx={{ px: "5rem", pt: "1rem" }}>
              Alejandra Cruz is a singer and songwriter from Barcelona, Spain.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "50%",
          m: "auto",
          p: "5rem",
        }}
      >
        <Typography variant="h2" textAlign={"center"}>
          Alejandra Cruz grew up by the beach, but you won’t mistake her songs for breezy summertime
          fare.
        </Typography>
        <Typography variant="h6" textAlign={"center"} sx={{mt: "1rem"}}>
          She writes from the point of view of outcasts and misfits, bringing a new perspective and
          incisive wit to her tales of relationships gone wrong. With a smoky voice trained on jazz
          classics and a stacked backing band, she combines a vintage sound with modern material to
          thrilling effect.
        </Typography>
      </Box>
      
    </Box>
  );
};

export default Home;
