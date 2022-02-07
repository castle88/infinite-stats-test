import {
  Box,
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
  CardMedia,
} from "@mui/material";
// import SpaceBox from "../components/SpaceBox/SpaceBox";
// import CenterBox from "../components/CenterBox/CenterBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [gamertag, setGamertag] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      navigate(`/profile/${gamertag}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box mt={20}>
      <Card sx={{ m: "0 auto", maxWidth: 500 }}>
        <CardMedia
          component="img"
          image="https://assets.halo.autocode.gg/static/infinite/images/multiplayer/ugcgamevariants/ctf.jpg"
        />
        <CardContent>
          <Typography
            sx={{ p: "0 .5rem" }}
            color="primary"
            align="center"
            variant="h5"
          >
            Please Enter your Gamertag to Begin OR use 'whoa dud3' to Test
            Application
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                mt: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <TextField
                onChange={(e) => setGamertag(e.target.value)}
                variant="outlined"
                label="Gamertag"
              />
              <Box mt={2}>
                <Button type="submit" sx={{ mr: 2 }} variant="outlined">
                  Signup
                </Button>
                <Button type="submit" variant="contained">
                  Signin
                </Button>
              </Box>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
