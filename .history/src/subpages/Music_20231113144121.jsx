import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Animated from "../components/Animated";

const Music = ({ isMobile }) => {
  const songs = [
    "https://open.spotify.com/embed/track/4Dvkj6JhhA12EX05fT7y2e?utm_source=generator",
    "https://open.spotify.com/embed/track/5Ohxk2dO5COHF1krpoPigN?utm_source=generator",
    "https://open.spotify.com/embed/track/6UelLqGlWMcVH1E5c4H7lY?utm_source=generator",
    "https://open.spotify.com/embed/track/1qEmFfgcLObUfQm0j1W2CK?utm_source=generator",
    "https://open.spotify.com/embed/track/3jjujdWJ72nww5eGnfs2E7?utm_source=generator",
    "https://open.spotify.com/embed/track/45S5WTQEGOB1VHr1Q4FuPl?utm_source=generator",
    "https://open.spotify.com/embed/track/6VzcQuzTNTMFnJ6rBSaLH9?utm_source=generator",
    "https://open.spotify.com/embed/track/0rzaRSujxA0bKyjJl6vHYq?utm_source=generator",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        px: isMobile ? "1rem" : "3rem",
        backgroundColor: grey[900],
        pt: isMobile ? "100px" : "200px",
        pb: "50px",
      }}
    >
      {songs.map((song, index) => (
        <Animated key={index} style={{ transitionDelay: "0.5s" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: isMobile ? "1rem" : 0, overflow: "hidden" }}>
            <iframe
              src={song}
              width={isMobile ? "100%" : "50%"}
              height="152"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              scrolling="no"
            ></iframe>
          </Box>
        </Animated>
      ))}
    </Box>
  );
};

export default Music;
