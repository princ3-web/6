import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";


const Navbar = () => {
  const items = [
    { title: "Home", link: "/" },
    { title: "Gallery", link: "/about" },
    { title: "Music", link: "/instructors" },
    { title: "Blog", link: "/classes" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        px: "3rem",
        width: "100%",
        height: "120px",
      }}
    >
      <Box>
        <Typography color={grey[100]} variant="h4" sx={{ cursor: "pointer" }}>
          Alejandra Cruz
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {items.map((item) => (
          <Link to={item.link} style={{color:"unset", textDecoration:"none"}}>
          <Typography color={grey[100]} variant="h6" sx={{ mx: "0.5rem", cursor: "pointer" }}>
            {item.title}
          </Typography>
          </Link>
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        <InstagramIcon sx={{ mx: "0.5rem", color: grey[100], cursor: "pointer" }} />
        <FacebookIcon sx={{ mx: "0.5rem", color: grey[100], cursor: "pointer" }} />
        <LibraryMusicIcon sx={{ mx: "0.5rem", color: grey[100], cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default Navbar;
