import React from "react";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

const Animated = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Box ref={ref}>
      <Box
        style={{
          filter: !inView ? "opacity(0)" : "opacity(1)",
          padding: !inView ? "00px" : "20px",
          transition: "1s",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Animated;
