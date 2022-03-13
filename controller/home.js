const infiniteAPI = require("../utils/infiniteAPI");
const User = require("../model/User");

module.exports = {
  getProfile: async (req, res, next) => {
    // change gamertag to receive input from clientside form
    const { gamertag } = req.user;
    try {
      const appearance = await infiniteAPI.getAppearance(gamertag);
      const csrs = await infiniteAPI.getCSRS(gamertag);
      const serviceRecord = await infiniteAPI.getServiceRecord(gamertag);
      const matchHistory = await infiniteAPI.getMatchHistory(gamertag);
      if (!appearance || !csrs || !serviceRecord || !matchHistory) {
        return next(new Error("There was an error locating your data"));
      }
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

      res.status(200).json({ success: true, profile });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
