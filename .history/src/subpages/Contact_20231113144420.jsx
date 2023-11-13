import React from "react";
import { Box, Typography, Button, CardMedia, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";

const Contact = ({ isMobile }) => {
  return (
    <Box sx={{ display: "flex", backgroundColor: grey[500], flexDirection: isMobile ? "column" : "row", pt: "2" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          padding: isMobile ? "2rem" : "250px 70px",
          width: isMobile ? "100%" : "50%",
        }}
      >
        <Typography variant="h3" sx={{ width: isMobile ? "100%" : "50%" }}>
          Contact me
        </Typography>
        <Box sx={{ width: isMobile ? "100%" : "75%", mt: isMobile ? "1rem" : "2rem" }}>
          <Typography variant="subtitle1">
            If you're a devoted fan of Harry Styles, don't hesitate to reach out and share your
            admiration and support – your messages can truly brighten his day and inspire him to
            keep creating incredible music.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          padding: isMobile ? "2rem" : "250px 70px",
          width: isMobile ? "100%" : "50%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            sx={{ mr: isMobile ? "0" : "0.5rem", width: isMobile ? "100%" : "50%" }}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            sx={{ width: isMobile ? "100%" : "50%" }}
          />
        </Box>
        <Box sx={{ mt: isMobile ? "1rem" : "0.5rem" }}>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            sx={{ my: "0.25rem", width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="subject"
            variant="outlined"
            sx={{ my: "0.25rem", width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="your message"
            variant="outlined"
            sx={{ my: "1.75rem", width: "100%" }}
          />
          <Button
            variant="outlined"
            sx={{
              backgroundColor: grey[700],
              color: grey[100],
              border: "none",
              px: "65px",
              py: "15px",
              my: "15px",
              borderRadius: "0px",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: grey[800],
                border: "none",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
