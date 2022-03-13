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
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
      const response = await fetch("http://localhost:3333/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
      }

      // navigate(`/profile`);
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
          <Typography variant="subtitle">
            please log in to get started
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
              <Stack direction="row">
                <Button type="submit" variant="contained">
                  Signin
                </Button>
              </Stack>
            </Stack>
          </form>
          <Typography variant="body">
            Need an account?
            <Button>Signup</Button>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
