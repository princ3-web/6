import React from "react";
import { Box, CardMedia, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.png";

const Home = () => {
  const items = [
    { item: "Barcelona, SP", date: "6.17" },
    { item: "Paris, FR", date: "6.22" },
    { item: "Berlin, BRD", date: "6.25" },
    { item: "Copenhagen, DK", date: "7.01" },
    { item: "Berlin, BRD", date: "7.04" },
    { item: "Berlin, BRD", date: "7.11" },
    { item: "Zürich, CH", date: "7.20" },
  ];

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
        <Typography variant="h6" textAlign={"center"} sx={{ mt: "1rem" }}>
          She writes from the point of view of outcasts and misfits, bringing a new perspective and
          incisive wit to her tales of relationships gone wrong. With a smoky voice trained on jazz
          classics and a stacked backing band, she combines a vintage sound with modern material to
          thrilling effect.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
          backgroundColor: grey[800],
          p: "4rem",
        }}
      >
        <CardMedia
          component="img"
          image={image2}
          alt="abc"
          sx={{ width: "100%", height: "400px" }}
        />
        <Typography variant="h2" color={grey[100]} sx={{ p: "4rem" }}>
          Upcoming Shows
        </Typography>
        <Box sx={{display:"flex", flexWrap:""}}>
          {items.map((item) => (
            <Box>
              <Typography>{item.date}</Typography>
              <Typography>{item.title}</Typography>
              <Typography></Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
