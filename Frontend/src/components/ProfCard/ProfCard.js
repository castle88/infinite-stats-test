import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import SpaceBox from "../SpaceBox/SpaceBox";
import { useState } from "react";
// my imports

import ExposureIcon from "@mui/icons-material/Exposure"; // service record
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary"; // match history
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech"; // top medals
import ServiceRecord from "../ServiceRecord/ServiceRecord";
import RankStack from "../RankStack/RankStack";
import MatchHistory from "../MatchHistory/MatchHistory";
import TopMedals from "../TopMedals/TopMedals";
import { deepPurple } from "@mui/material/colors";

export default function ProfCard({ profile }) {
  const [expanded, setExpanded] = React.useState(false);

  const [active, setActive] = useState(<></>);

  const serviceRecordComponent = (
    <ServiceRecord serviceRecord={profile.serviceRecord.serviceRecord} />
  );
  const matchHistoryComponent = (
    <MatchHistory matchHistory={profile.matchHistory} />
  );
  const topMedalsComponent = (
    <TopMedals topMedals={profile.serviceRecord.topMedals} />
  );

  const handleService = () => {
    setExpanded(true);
    setActive(serviceRecordComponent);
  };

  const handleHistory = () => {
    setExpanded(true);
    setActive(matchHistoryComponent);
  };

  const handleTop = () => {
    setExpanded(true);
    setActive(topMedalsComponent);
  };

  return (
    <Card sx={{ mt: 10, maxWidth: 500 }}>
      <CardHeader
        sx={{ bgcolor: `${deepPurple[500]}` }}
        avatar={
          <Avatar
            sx={{ bgcolor: grey[500] }}
            src={profile.appearance.emblem}
            aria-label="Emblem"
          />
        }
        title={
          <Typography variant="h5" component="h2">
            {profile.appearance.gamertag}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle" color={grey[500]}>
            {profile.appearance.servicetag}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        image="https://assets.halo.autocode.gg/static/infinite/images/multiplayer/ugcgamevariants/fiesta.jpg"
      />
      <CardContent>
        <SpaceBox>{<RankStack csrs={profile.csrs} />}</SpaceBox>
      </CardContent>

      <CardActions>
        <SpaceBox>
          <IconButton
            onClick={handleService}
            aria-label="Service Record"
            color="primary"
            value="Service Record"
          >
            <ExposureIcon />
          </IconButton>

          <IconButton
            onClick={handleHistory}
            aria-label="Match History"
            color="primary"
            value="Match History"
          >
            <LocalLibraryIcon />
          </IconButton>

          <IconButton
            onClick={handleTop}
            aria-label="Top Medals"
            color="primary"
            value="Top Medals"
          >
            <MilitaryTechIcon />
          </IconButton>
        </SpaceBox>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{active}</CardContent>
      </Collapse>
    </Card>
  );
}
