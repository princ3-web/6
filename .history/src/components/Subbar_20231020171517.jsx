import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { grey } from "@mui/material/colors";

const Subbar = () => {
  return (
    <Box sx={{ py: "2rem", textAlign: "center" }}>
       <Box sx={{ display: "flex", justifyContent:"center"}}>
        <InstagramIcon sx={{ mx: "0.5rem", color: grey[900], cursor: "pointer" }} />
        <FacebookIcon sx={{ mx: "0.5rem", color: grey[900], cursor: "pointer" }} />
        <LibraryMusicIcon sx={{ mx: "0.5rem", color: grey[900], cursor: "pointer" }} />
      </Box>
      <Typography>All Rights Reserved 2023</Typography>
    </Box>
  );
};

export default Subbar;
