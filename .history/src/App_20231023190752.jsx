import "./App.css";
import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import About from "./subpages/About";
import Gallery from "./subpages/Gallery";
import Music from "./subpages/Gallery";
import Blog from "./subpages/Gallery";
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

  return (
    <ThemeProvider theme={theme}>
      <Box >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Subbar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
