import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Animated from "../components/Animated";

const Music = () => {
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

  document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.querySelector(".spotify-iframe");
  
    iframe.onload = function() {
      iframe.style.display = "block";
    };
  });
  
  return (
    <Box
      sx={{
        width: "100vw",
        boxSizing: "border-box",
        px: "3rem",
        backgroundColor: grey[900],
        pt: "200px",
        pb: "50px",
      }}
    >
      {songs.map((song) => (
        <Animated>
          <Box sx={{ display: "flex", justifyContent: "center", mb: "1rem", overflow: "hidden" }}>
            <iframe
              src={song}
              width="50%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              scrolling="no"
              style={{filter: "opac"}}
            ></iframe>
          </Box>
        </Animated>
      ))}
    </Box>
  );
};

export default Music;
