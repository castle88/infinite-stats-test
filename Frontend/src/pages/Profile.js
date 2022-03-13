import ProfCard from "../components/ProfCard/ProfCard";
import CenterBox from "../components/CenterBox/CenterBox";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";

export default function Profile() {
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
        // change back to heroku or better yet make a constant
        const res = await fetch(`http://localhost:3333/api/home`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        if (data.success) {
          setProfile(data.profile);
          setDoneLoading(true);
        } else {
          // handle error cases
          console.log(data);
          setDoneLoading(true);
        }
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
