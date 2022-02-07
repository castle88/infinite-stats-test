import ProfileStatsList from "../ProfileStatsList/ProfileStatsList";
import {
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Box,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default function ServiceRecord({ serviceRecord }) {
  return (
    <Box sx={{ maxWidth: 365, m: "0 auto" }}>
      {serviceRecord.map(
        (cat, index) =>
          cat.category !== "Top Medals" && (
            <Accordion
              key={`${cat}${index}`}
              sx={{ bgcolor: "rgba(255, 255, 255, 0.08)" }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>{cat.category}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ProfileStatsList stats={cat.stats} />
              </AccordionDetails>
            </Accordion>
          )
      )}
    </Box>
  );
}
