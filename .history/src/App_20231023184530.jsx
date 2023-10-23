import "./App.css";
import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import About from "./subpages/About";
import Navbar from "./components/Navbar";
import Subbar from "./components/Subbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'Your Custom Font, sans-serif', // Replace with your custom font
    },
  });

  return (
    <ThemeProvider theme={theme}><
    <Box sx={{ fontFamily: "Playpen Sans, cursive" }}>
      <Typography sx={{ fontFamily: "Playpen Sans, cursive" }}></Typography>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Subbar />
    </Box>
  );
}

export default App;
