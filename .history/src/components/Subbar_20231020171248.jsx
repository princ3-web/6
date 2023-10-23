import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
imp

const Subbar = () => {
  return (
    <Box sx={{ py: "2rem", textAlign: "center" }}>
       <Box sx={{ display: "flex" }}>
        <InstagramIcon sx={{ mx: "0.5rem", color: grey[100], cursor: "pointer" }} />
        <FacebookIcon sx={{ mx: "0.5rem", color: grey[100], cursor: "pointer" }} />
        <LibraryMusicIcon sx={{ mx: "0.5rem", color: grey[100], cursor: "pointer" }} />
      </Box>
      <Typography>All Rights Reserved 2023</Typography>
    </Box>
  );
};

export default Subbar;
