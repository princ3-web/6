import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { grey } from "@mui/material/colors";

const Navbar = () => {
  const items = ["About", "Gallery", "Music", "Blog", "Contact"];

  return (
    <Box
      sx={{
        position:"absolute",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        px: "4rem",
        width: "100%",
        height: "120px",
      }}
    >
      <Box>
        <Typography color={grey[100]} variant="h4">Alejandra Cruz</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {items.map((item) => (
          <Typography color={grey[100]} variant="h6" sx={{mx: "0.5rem", cursor: "pointer"}}>{item}</Typography>
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        <InstagramIcon sx={{mx: "0.5rem", color: grey[100], cursor: "pointer"}} />
        <FacebookIcon sx={{mx: "0.5rem", color: grey[100]}} />
        <LibraryMusicIcon sx={{mx: "0.5rem", color: grey[100]}} />
      </Box>
    </Box>
  );
};

export default Navbar;
