const infiniteAPI = require("../utils/infiniteAPI");

module.exports = {
  getPlayer: async (req, res, next) => {
    const playerID = req.params.id;
    try {
      const appearance = await infiniteAPI.getAppearance(playerID);
      const csrs = await infiniteAPI.getCSRS(playerID);
      const serviceRecord = await infiniteAPI.getServiceRecord(playerID);
      const matchHistory = await infiniteAPI.getMatchHistory(playerID);

      res
        .status(200)
        .json({ success: true, appearance, csrs, serviceRecord, matchHistory });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
