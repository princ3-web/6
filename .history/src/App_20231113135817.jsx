import "./App.css";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import About from "./subpages/About";
import Gallery from "./subpages/Gallery";
import Music from "./subpages/Music";
import Blog from "./subpages/Blog";
import Contact from "./subpages/Contact";
import Navbar from "./components/Navbar";
import Subbar from "./components/Subbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Raleway", 
    },
  });

  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <ThemeProvider theme={theme}>
      <Box >
        <Navbar  isMobile={isMobile}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/music" element={<Music />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Subbar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
