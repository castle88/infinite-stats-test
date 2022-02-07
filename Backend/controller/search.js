const infiniteAPI = require("../utils/infiniteAPI");

module.exports = {
  getPlayer: async (req, res) => {
    const playerID = req.params.id;
    try {
      const appearance = await infiniteAPI.getAppearance(playerID);
      const csrs = await infiniteAPI.getCSRS(playerID);
      const serviceRecord = await infiniteAPI.getServiceRecord(playerID);
      const matchHistory = await infiniteAPI.getMatchHistory(playerID);

      res.json({ appearance, csrs, serviceRecord, matchHistory });
    } catch (err) {
      console.log(err);
    }
  },
};
