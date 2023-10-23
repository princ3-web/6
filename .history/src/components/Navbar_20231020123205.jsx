import React from "react";
import { Box, Typography} from "@mui/material";

const Navbar = () => {

  const items = ["About", "Gallery", "Music", "Blog", "Contact" ]


  return <Box>
    <Box>
      <Typography>Alejandra Cruz</Typography>
    </Box>
    <Box>
      {items.map}
    </Box>
    <Box></Box>
  </Box>;
};

export default Navbar;
