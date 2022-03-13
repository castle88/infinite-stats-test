import {
  Box,
  Card,
  Stack,
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
  const [formData, setFormData] = useState({
    gamertag: "",
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, gamertag, password2 } = formData;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (password !== password2) {
        console.log("passwords dont match");
      } else {
        const response = await fetch(
          "http://localhost:3333/api/auth/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gamertag, email, password }),
          }
        );

        const data = await response.json();
        console.log(data);

        if (data.success) {
          localStorage.setItem("token", data.token);
        }

        navigate(`/profile`);
      }
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
            Welcome to Infinite Stats
          </Typography>
          <Typography sx={{ mt: 2 }} align="center">
            please fill in all fields to sign up
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack
              direction="column"
              spacing={2}
              sx={{
                mt: 5,
                p: 2,
              }}
            >
              <TextField
                variant="outlined"
                label="Gamertag"
                name="gamertag"
                type="text"
                value={gamertag}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                label="Confirm Password"
                name="password2"
                type="password"
                value={password2}
                onChange={handleChange}
              />
              <Stack direction="row">
                <Button type="submit" variant="contained">
                  Register
                </Button>
              </Stack>
            </Stack>
          </form>
          <Typography variant="body">
            Already a member?
            <Button onClick={() => navigate("/")}>Login</Button>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
