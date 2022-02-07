import {
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Box,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import CenterBox from "../CenterBox/CenterBox";
import MatchCard from "../MatchCard/MatchCard";
import { useState } from "react";

export default function MatchHistory({ matchHistory }) {
  const crossplay = matchHistory.ranked.open;
  const controller = matchHistory.ranked.controller;
  const mnk = matchHistory.ranked.mnk;
  const unranked = matchHistory.unranked;

  const [active, setActive] = useState(crossplay);

  return (
    <Box sx={{ maxWidth: 365, m: "0 auto" }}>
      <CenterBox>
        <ButtonGroup variant="contained" sx={{ mb: 2 }}>
          <Button onClick={() => setActive(crossplay)} size="small">
            Open
          </Button>
          <Button onClick={() => setActive(controller)} size="small">
            Controller
          </Button>
          <Button onClick={() => setActive(mnk)} size="small">
            MNK
          </Button>
          <Button onClick={() => setActive(unranked)} size="small">
            Unranked
          </Button>
        </ButtonGroup>
      </CenterBox>
      <Box>
        {/* figure out some scrolling */}
        {active.map((item, index) => (
          <MatchCard key={item.mapName + index} item={item} />
        ))}
      </Box>
    </Box>
  );
}
