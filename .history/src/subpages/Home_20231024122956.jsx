import React from "react";
import { Box, CardMedia, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import Animated from "../components/Animated";

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

  const albums = [
    {
      title: "Fine Line",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: image4,
    },
    {
      title: "Harry Styles",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: image5,
    },
    {
      title: "Harry's House",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: image6,
    },
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
          <Box sx={{ width: "55%" }}>
            <Animated>
              <CardMedia component="img" image={image1} alt="abc" sx={{ height: "800px" }} />
            </Animated>
          </Box>
          <Box sx={{ width: "45%", px: "5rem" }}>
            <Typography color={grey[100]} fontWeight={"Bold"} sx={{ pt: "5rem", fontSize: "70px" }}>
              Harry Styles, a singer and songwriter from Holmes Chapel, Cheshire, United Kingdom.
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
          width: "100%",
          m: "auto",
          py: "5rem",
          px: "25%",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h2" fontWeight={"Bold"} textAlign={"center"}>
          Harry Styles was raised near the coast, but you won't confuse his music for carefree,
          sunny tunes.
        </Typography>
        <Typography variant="h6" textAlign={"center"} sx={{ mt: "1rem" }}>
          He crafts narratives from the perspective of outsiders and nonconformists, injecting a
          fresh viewpoint and sharp humor into his stories of troubled romances. With a soulful
          voice influenced by jazz standards and a talented backing band, he blends a timeless sound
          with contemporary themes, resulting in an electrifying impact.
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
        <Animated>
          <CardMedia
            component="img"
            image={image2}
            alt="abc"
            sx={{ width: "100%", height: "400px" }}
          />
        </Animated>

        <Typography variant="h2" color={grey[100]} fontWeight={"Bold"} sx={{ p: "4rem" }}>
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
          <Box sx={{ width: "50%" }}>
            <Animated>
              <CardMedia component="img" image={image3} alt="abc" sx={{ height: "700px" }} />
            </Animated>
          </Box>
          <Box sx={{ width: "50%", px: "5rem" }}>
            <Typography color={grey[900]} fontWeight={"Bold"} sx={{ pt: "8rem", fontSize: "50px" }}>
              New Album Out Now
            </Typography>
            <Typography color={grey[900]} variant="h6" sx={{ pt: "1rem" }}>
            Spanning more than ten tracks, Harry Styles' latest album unfolds a year in the lives of a diverse set of characters, weaving in and out of the narrative shadows. With its opulent production and a complete string ensemble, it stands as his most masterful album to date.





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
          backgroundColor: grey[900],
          p: "4rem",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight={"Bold"} color={grey[100]} sx={{ p: "3rem" }}>
          Discography
        </Typography>
        <Typography variant="h6" color={grey[100]} sx={{ pb: "3rem", width: "50%" }}>
        Harry Styles' music style is a captivating fusion of pop, rock, and elements of classic and contemporary sounds, creating a unique and versatile sonic experience that resonates with a broad audience.





        </Typography>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
          {albums.map((item) => (
            <Box sx={{ width: "32%", textAlign: "start" }}>
              <Animated>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt="abc"
                  sx={{ width: "100%", height: "450px" }}
                />
              </Animated>
              <Typography variant="h5" fontWeight={"Bold"} color={grey[100]} sx={{ py: "0.5rem" }}>
                {item.title}
              </Typography>
              <Typography color={grey[100]}>{item.text}</Typography>
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
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
