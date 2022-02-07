import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MatchPlayerStats from "../MatchPlayerStats/MatchPlayerStats";

export default function MatchTeams({ players }) {
  const eagle = players.eaglePlayers;
  const cobra = players.cobraPlayers;

  return (
    <>
      <MatchPlayerStats teamPlayers={eagle} />
      <MatchPlayerStats teamPlayers={cobra} />
    </>
  );
}
