import React from "react";
import { Box, CardMedia, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.jpg";

const Home = () => {
  const items = [
    { title: "Barcelona, SP", date: "6.17" },
    { title: "Paris, FR", date: "6.22" },
    { title: "Berlin, BRD", date: "6.25" },
    { title: "Copenhagen, DK", date: "7.01" },
    { title: "Berlin, BRD", date: "7.04" },
    { title: "Berlin, BRD", date: "7.11" },
    { title: "Zürich, CH", date: "7.20" },
  ];

  return (
    <Box>
      <Box
        sx={{
          boxSizing: "border-box",
          px: "3rem",
          backgroundColor: grey[900],
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
          <Box sx={{ width: "50%", px: "5rem" }}>
            <Typography color={grey[100]} sx={{ pt: "5rem", fontSize: "70px" }}>
              Alejandra Cruz is a singer and songwriter from Barcelona, Spain.
            </Typography>
            <Typography color={grey[100]} variant="h5" sx={{ pt: "1rem" }}>
              Her new album is available now.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: grey[500],
                p: "1.5rem",
                px: "5rem",
                mt: "2rem",
                borderRadius: 0,
                ":hover": {
                  backgroundColor: grey[600],
                },
              }}
            >
              Listen Now
            </Button>
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
          backgroundColor: grey[900],
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
        <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          {items.map((item) => (
            <Box sx={{ width: "33%", mb: "3rem" }}>
              <Typography variant="h3" textAlign={"center"} color={grey[100]} sx={{ mb: "1rem" }}>
                {item.date}
              </Typography>
              <Typography variant="h5" textAlign={"center"} color={grey[100]} sx={{ mb: "1rem" }}>
                {item.title}
              </Typography>
              <Typography
                variant="h6"
                textAlign={"center"}
                color={grey[500]}
                sx={{ textDecoration: "underline", textUnderlineOffset: "3px", cursor: "pointer" }}
              >
                Get Tickets
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          boxSizing: "border-box",
          px: "3rem",
          backgroundColor: grey[100],
          pt: "200px",
          pb: "50px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={image3}
            alt="abc"
            sx={{ width: "50%", height: "800px" }}
          />
          <Box sx={{ width: "50%", px: "5rem" }}>
            <Typography color={grey[900]} sx={{ pt: "8rem", fontSize: "50px" }}>
              New Album Out Now
            </Typography>
            <Typography color={grey[900]} variant="h6" sx={{ pt: "1rem" }}>
              Over ten songs, Cruz’s new album charts a year in the life of a cast of characters who
              step in and out of the shadows. Featuring lush production and a full string section,
              it’s her most accomplished album to date.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: grey[500],
                p: "1.5rem",
                px: "5rem",
                mt: "2rem",
                borderRadius: 0,
                ":hover": {
                  backgroundColor: grey[600],
                },
              }}
            >
              Listen Now
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{backgroundColor: grey[900], p: "4rem"}}>
              <Typography>Discography</Typography>
              <Typography>From jazz-influenced pop to conceptual song cycles, Alejandra’s full discography shows an artist in full control of her talents.</Typography>
      </Box>
    </Box>
  );
};

export default Home;
