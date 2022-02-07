const infiniteAPI = require("../utils/infiniteAPI");
const User = require("../model/User");

module.exports = {
  createProfile: async (req, res) => {
    // change to receive input from clientside form
    const gamertag = req.params.id.split("_").join(" ");
    try {
      const appearance = await infiniteAPI.getAppearance(gamertag);
      const csrs = await infiniteAPI.getCSRS(gamertag);
      const serviceRecord = await infiniteAPI.getServiceRecord(gamertag);
      const matchHistory = await infiniteAPI.getMatchHistory(gamertag);

      await User.create({
        gamertag: appearance.gamertag,
        servicetag: appearance.servicetag,
        emblem_url: appearance.emblem,
        csrs: [...csrs],
        serviceRecord: [...serviceRecord],
        matchHistory: { ...matchHistory },
        loggedIn: false,
      });

      res.json("created user");
    } catch (err) {
      console.log(err);
    }
  },
};
