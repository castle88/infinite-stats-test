import { Grid } from "react-loader-spinner";
import { Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "hsla(0, 0%, 0%, 0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid height={100} width={100} />
    </Box>
  );
}
