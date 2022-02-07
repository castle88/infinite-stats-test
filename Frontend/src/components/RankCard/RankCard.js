import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function RankCard({ item }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="body" mb={2}>
        {item.input}
      </Typography>
      <Avatar alt="input rank" src={item.rank["tier_image_url"]} />
      <Typography variant="body" mt={2}>
        {item.rank.value > 0 ? item.rank.value : 0}
      </Typography>
    </Box>
  );
}
