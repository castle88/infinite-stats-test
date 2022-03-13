import ProfCard from "../components/ProfCard/ProfCard";
import CenterBox from "../components/CenterBox/CenterBox";
import { Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";

export default function Search() {
  const { gamertag } = useParams();
  const [profile, setProfile] = useState({});
  const [doneLoading, setDoneLoading] = useState(false);

  const navigate = useNavigate();

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("no token");
      navigate("/");
    } else {
      try {
        const res = await fetch(
          `https://infinite-stats.herokuapp.com/api/${gamertag}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();

        console.log(data);

        await setProfile(data);
        await setDoneLoading(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => fetchProfile(), []);

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
