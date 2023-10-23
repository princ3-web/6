import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Music = () => {

  const songs = 
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
      <iframe
        src="https://open.spotify.com/embed/track/4Dvkj6JhhA12EX05fT7y2e?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <iframe
        src="https://open.spotify.com/embed/track/5Ohxk2dO5COHF1krpoPigN?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <iframe
        src="https://open.spotify.com/embed/track/6UelLqGlWMcVH1E5c4H7lY?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <iframe
        src="https://open.spotify.com/embed/track/1qEmFfgcLObUfQm0j1W2CK?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </Box>
  );
};

export default Music;
