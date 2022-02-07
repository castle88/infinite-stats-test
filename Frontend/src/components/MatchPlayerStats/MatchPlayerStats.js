import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import ProfileStatsList from "../ProfileStatsList/ProfileStatsList";
import { useNavigate } from "react-router-dom";

export default function MatchPlayerStats({ teamPlayers }) {
  const navigate = useNavigate();

  return (
    <Box mb={2}>
      {teamPlayers.map((player) => (
        <Accordion
          key={player.gamertag}
          sx={{ bgcolor: "rgba(255, 255, 255, 0.08)" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{player.gamertag}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Button onClick={() => navigate(`/search/${player.gamertag}`)}>
              Visit
            </Button>
            {player.record.map((stat, indx) => (
              <Accordion
                key={player.gamertag + indx}
                sx={{ bgcolor: "rgba(255, 255, 255, 0.08)" }}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>{stat.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ProfileStatsList stats={stat.stats} />
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
