import {
  ButtonGroup,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
} from "@mui/material";
import MatchTeams from "../components/MatchTeams/MatchTeams";
import TeamStats from "../components/TeamStats/TeamStats";
import CenterBox from "../components/CenterBox/CenterBox";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { grey, teal } from "@mui/material/colors";

export default function SpecificMatch() {
  const { id } = useParams();
  const [match, setMatch] = useState({});
  const [doneLoading, setDoneLoading] = useState(false);

  const fetchMatch = async () => {
    try {
      console.log(id);
      const res = await fetch(`http://localhost:3333/matches/${id}`);
      const data = await res.json();

      setMatch(data);
      setDoneLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => fetchMatch(), []);
  console.log(match);

  const generalStats = doneLoading && (
    <TeamStats eagle={match.eagle} cobra={match.cobra} />
  );
  const playerStats = doneLoading && <MatchTeams players={match.players} />;
  // const comments =
  const [active, setActive] = useState(<></>);

  return doneLoading ? (
    <Card sx={{ m: "0 auto", mt: 10, maxWidth: 500 }}>
      <CardHeader
        sx={{
          bgcolor: `${teal[500]}`,
        }}
        title={
          <Typography variant="h5" component="h2">
            {match.matchDetails.map_name}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle">
            {match.matchDetails.playlist}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        image={
          "https://assets.halo.autocode.gg/static/infinite/images/multiplayer/maps/aquarius.jpg"
        }
      />
      <CardContent>
        <CenterBox>
          <ButtonGroup>
            <Button onClick={() => setActive(generalStats)}>General</Button>
            <Button onClick={() => setActive(playerStats)}>Players</Button>
            <Button disabled>Comments</Button>
          </ButtonGroup>
        </CenterBox>
        {active}
      </CardContent>
    </Card>
  ) : (
    <Loading />
  );
}
