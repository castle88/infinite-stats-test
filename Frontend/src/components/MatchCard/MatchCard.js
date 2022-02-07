import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SpaceBox from "../SpaceBox/SpaceBox";
import CenterBox from "../CenterBox/CenterBox";

export default function MatchCard({ item }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ mb: 1 }}>
      <CardMedia component="img" image={item.mapImg} />
      <CardContent
        sx={{ bgcolor: `${item.outcome === "win" ? "green" : "red"}` }}
      >
        <SpaceBox>
          <Typography variant="h5">{item.mapName}</Typography>
          <Typography variant="h5">{item.gameType}</Typography>
        </SpaceBox>
      </CardContent>
      <CardActions sx={{ bgcolor: "rgba(255, 255, 255, 0.08)" }}>
        <CenterBox>
          <Button onClick={() => navigate(`/match/${item.mapId}`)}>
            Details
          </Button>
        </CenterBox>
      </CardActions>
    </Card>
  );
}
