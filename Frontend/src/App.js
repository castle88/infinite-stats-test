import * as React from "react";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SpecificMatch from "./pages/SpecificMatch";
import Landing from "./pages/Landing";
import Search from "./pages/SearchProf";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/profile/:gamertag" element={<Profile />} />
          <Route path="/search/:gamertag" element={<Search />} />
          <Route path="/match/:id" element={<SpecificMatch />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
