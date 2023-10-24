import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { grey } from "@mui/material/colors";

const Subbar = () => {
  return (
    <Box sx={{ py: "3rem", textAlign: "center" }}>
          <Box sx={{ display: "flex", justi }}>
        <a href="https://www.instagram.com/harrystyles/">
          <InstagramIcon sx={{ mx: "0.5rem", color: grey[900], cursor: "pointer" }} />
        </a>
        <a href="https://www.facebook.com/harrystyles">
          <FacebookIcon sx={{ mx: "0.5rem", color: grey[900], cursor: "pointer" }} />
        </a>
        <a href="https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3?si=Kv0QzgBUSkOE6_Lvoz28qw">
          <LibraryMusicIcon sx={{ mx: "0.5rem", color: grey[900], cursor: "pointer" }} />
        </a>
      </Box>
      <Typography>All Rights Reserved 2023</Typography>
    </Box>
  );
};

export default Subbar;
