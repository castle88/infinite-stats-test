import { Box } from "@mui/material";

export default function CenterBox({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        m: "1rem 0",
      }}
    >
      {children}
    </Box>
  );
}
