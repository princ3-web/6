import React from "react";
import { Box, Typography } from "@mui/material";

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
