import React from "react";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

const Animated = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when in view
      });
      
  return <Box>Animated</Box>;
};

export default Animated;
