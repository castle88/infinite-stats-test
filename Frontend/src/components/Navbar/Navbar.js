import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "./Navbar.styles";
import { useNavigate } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";

export default function SearchAppBar() {
  const [search, setSearch] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: `${deepOrange[900]}` }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <Avatar alt="emblem" />
          </IconButton>
          <Search>
            <form onSubmit={handleSubmit}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Gamertag…"
                inputProps={{ "aria-label": "search" }}
              />
            </form>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
