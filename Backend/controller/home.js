const infiniteAPI = require("../utils/infiniteAPI");
const User = require("../model/User");

module.exports = {
  getProfile: async (req, res) => {
    // change gamertag to receive input from clientside form
    const gamertag = req.params.id.split("_").join(" ");
    try {
      const appearance = await infiniteAPI.getAppearance(gamertag);
      const csrs = await infiniteAPI.getCSRS(gamertag);
      const serviceRecord = await infiniteAPI.getServiceRecord(gamertag);
      const matchHistory = await infiniteAPI.getMatchHistory(gamertag);

      // await User.findOneAndUpdate(
      //   { gamertag: gamertag },
      //   {
      //     servictag: appearance.servicetag,
      //     emblem_url: appearance.emblem,
      //     csrs: [...csrs],
      //     serviceRecord: [...serviceRecord],
      //     matchHistory: { ...matchHistory },
      //   }
      // );

      // const profile = await User.find({ gamertag: gamertag });

      const profile = {
        appearance,
        csrs,
        serviceRecord,
        matchHistory,
      };

      console.log(profile);

      res.json(profile);
    } catch (err) {
      console.log(err);
    }
  },
};
