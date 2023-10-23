import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const Navbar = () => {
  const items = ["About", "Gallery", "Music", "Blog", "Contact"];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        px: "4rem",
        height: "120px"
      }}
    >
      <Box>
        <Typography variant="h5">Alejandra Cruz</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {items.map((item) => (
          <Typography sx={{mx: "0.5rem"}}>{item}</Typography>
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        <InstagramIcon />
        <FacebookIcon />
        <LibraryMusicIcon />
      </Box>
    </Box>
  );
};

export default Navbar;
