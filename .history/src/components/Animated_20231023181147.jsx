import React from "react";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

const Animated = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when in view
      });

  return   <div ref={ref}>
      <Paper elevation={inView ? 5 : 0} style={{ padding: '20px', transition: '0.3s' }}>
        This is an animated component
      </Paper>
    </div>;
};

export default Animated;
