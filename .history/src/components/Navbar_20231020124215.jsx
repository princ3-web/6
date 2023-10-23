import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const Navbar = () => {
  const items = ["About", "Gallery", "Music", "Blog", "Contact"];

  return (
    <Box sx={{ display: "flex", justifyContent:"space-between", boxSizing:"border-box", p }}>
      <Box>
        <Typography>Alejandra Cruz</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {items.map((item) => (
          <Typography>{item}</Typography>
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        <InstagramIcon/>
        <FacebookIcon/>
        <LibraryMusicIcon/>
      </Box>
    </Box>
  );
};

export default Navbar;
