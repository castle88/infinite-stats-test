import { Grid, Box, Avatar, Typography } from "@mui/material";

export default function TopMedals({ topMedals }) {
  return (
    <Grid spacing={1} container>
      {topMedals.map((medal) => (
        <Grid key={medal.id} xs={4} item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar alt="medal" src={medal.image_urls.medium} />
            <Typography mt={1} variant="body">
              {medal.count}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
