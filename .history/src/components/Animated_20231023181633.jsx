import React from "react";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

const Animated = ({children}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  return (
    <Box ref={ref}>
      <Box style={{ padding: inView ? "20px" : "0px", transition: "2.3s" }}>
        {children}
      </Box>
    </Box>
  );
};

export default Animated;
