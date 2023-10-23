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
          transform: !inView ? "translate(0%, 0%)" : "translate(0%, 5%)",
          transition: "1s",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Animated;
