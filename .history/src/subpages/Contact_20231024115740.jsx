import React from "react";
import { Box, Typography, Button, CardMedia, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";

const Contact = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          paddingX: "70px",
          paddingY: "120px",
          width: "50%",
        }}
      >
        <Typography variant="h3" sx={{ width: "50%", mb: "2rem" }}>
          Let's work together
        </Typography>
        <Box sx={{ width: "60%" }}>
          <Typography variant="subtitle1" sx={{ width: "50%" }}>
            Further case studies available upon request. Please provide some information on your
            project or goals and we’ll move the conversation on from there.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          paddingX: "70px",
          paddingY: "120px",
          width: "50%",
        }}
      >
        <Box sx={{display:"flex"}}> 
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            sx={{ mr: "0.5rem", width: "50%" }}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            sx={{ width: "50%" }}
          />
        </Box>
        <Box sx={{mt:"1rem"}}>
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
              backgroundColor: grey[900],
              color: grey[100],
              border: "none",
              px: "65px",
              py: "15px",
              my: "15px",
              borderRadius: "0px",
              textTransform: "none",
              fontSize: "16px",
              '&:hover': {
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
