import { Box } from "@mui/material";

export default function SpaceBox({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}
