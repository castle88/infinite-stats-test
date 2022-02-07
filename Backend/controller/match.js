const infiniteAPI = require("../utils/infiniteAPI");

module.exports = {
  getMatch: async (req, res) => {
    const matchId = req.params.id;
    try {
      const match = await infiniteAPI.getSpecificMatch(matchId);

      res.json(match);
    } catch (err) {
      console.log(err);
    }
  },
};
