import React from "react";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

const Animated = ({) => {
  const [ref, inVi}ew] = useInView({
    triggerOnce: true, 
  });

  return (
    <Box ref={ref}>
      <Box style={{ padding: inView ? "20px" : "0px", transition: "0.3s" }}>
        This is an animated component
      </Box>
    </Box>
  );
};

export default Animated;
