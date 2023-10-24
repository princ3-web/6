import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Blog = () => {
  const items = [
    { title: "Collaboration with DJ 13 Days", date: "8/14/19" },
    { title: "Fine Line Album Release", date: "12/13/19" },
    { title: "Love On Tour Kickoff", date: "4/15/20" },
    { title: "Harry's 26th Birthday", date: "2/1/20" },
    { title: "Watermelon Sugar Music Video", date: "5/18/20" },
    { title: "Fine Line Live Stream Concert", date: "7/13/20" },
    { title: "Harry's Grammy Performance", date: "3/14/21" },
    { title: "Harry's Movie Debut in Dunkirk", date: "7/21/17" },
    { title: "One Direction's Formation", date: "7/23/10" },
    { title: "Golden Music Video Release", date: "10/26/20" },
    { title: "Harry's First Solo Single, Sign of the Times", date: "4/7/17" },
    { title: "Adore You Music Video Release", date: "12/6/19" },
  ];

  return (
    <Box
      sx={{
        display:"flex",
        flexWrap:"wrap",
        width: "100vw",
        boxSizing: "border-box",
        px: "3rem",
        backgroundColor: grey[900],
        pt: "200px",
        pb: "50px",
      }}
    >
      {items.map((item) => (
        <Box sx={{diwidth:"50%", }}>
          <Typography color={grey[100]}>{item.date}</Typography>
          <Typography color={grey[100]}>{item.title}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Blog;
