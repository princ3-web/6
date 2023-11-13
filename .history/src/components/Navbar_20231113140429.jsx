import React, { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Navbar = ({ isMobile }) => {
  const items = [
    { title: "Home", link: "/" },
    { title: "Gallery", link: "/gallery" },
    { title: "Music", link: "/music" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Link to={"/"} style={{ color: "unset", textDecoration: "none" }}>
          <Typography color={grey[100]} variant="h4" sx={{ cursor: "pointer" }}>
            Harry Styles
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 0%)",
        }}
      >
        {isMobile ? (
          <>
            <IconButton onClick={handleClick} sx={{ color: grey[100] }}>
              <Typography variant="h6">Menu</Typography>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{p: 0}}
            >
              {items.map((item, n) => (
                <MenuItem
                  key={n}
                  onClick={handleClose}
                  component={Link}
                  to={item.link}
                  style={{
                    textDecoration: "none",
                    color: grey[100],
                    backgroundColor: grey[900],
                    
                  }}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          items.map((item, n) => (
            <Link
              key={n}
              to={item.link}
              style={{ color: "unset", textDecoration: "none" }}
            >
              <Typography
                color={grey[100]}
                variant="h6"
                sx={{
                  mx: "0.5rem",
                  cursor: "pointer",
                  textDecoration: n === navbar && "underline",
                  textUnderlineOffset: "10px",
                  textDecorationThickness: "1px",
                }}
              >
                {item.title}
              </Typography>
            </Link>
          ))
        )}
      </Box>
      <Box sx={{ display: "flex" }}>
        <a href="https://www.instagram.com/harrystyles/">
          <InstagramIcon sx={{ mx: "0.5rem", color: grey[100], cursor: "pointer" }} />
        </a>
        <a href="https://www.facebook.com/harrystyles">
          <FacebookIcon sx={{ mx: "0.5rem", color: grey[100], cursor: "pointer" }} />
        </a>
        <a href="https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3?si=Kv0QzgBUSkOE6_Lvoz28qw">
          <LibraryMusicIcon sx={{ mx: "0.5rem", color: grey[100], cursor: "pointer" }} />
        </a>
      </Box>
    </Box>
  );
};

export default Navbar;
