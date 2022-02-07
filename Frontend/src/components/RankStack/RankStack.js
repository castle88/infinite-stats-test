import { Stack } from "@mui/material";
import RankCard from "../RankCard/RankCard";

export default function RankStack({ csrs }) {
  return (
    <Stack direction="row" spacing={6}>
      {csrs.map((item) => (
        <RankCard key={item.input} item={item} />
      ))}
    </Stack>
  );
}
