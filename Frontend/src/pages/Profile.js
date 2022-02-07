import ProfCard from "../components/ProfCard/ProfCard";
import CenterBox from "../components/CenterBox/CenterBox";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";

export default function Profile() {
  const { gamertag } = useParams();
  const [profile, setProfile] = useState({});
  const [doneLoading, setDoneLoading] = useState(false);

  const fetchProfile = async () => {
    try {
      console.log(gamertag);
      const res = await fetch(`http://localhost:3333/${gamertag}`);
      const data = await res.json();

      await setProfile(data);
      await setDoneLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => fetchProfile(), []);
  console.log(profile);

  return (
    <Box>
      {doneLoading ? (
        <CenterBox>
          <ProfCard profile={profile} />
        </CenterBox>
      ) : (
        <Loading />
      )}
    </Box>
  );
}
