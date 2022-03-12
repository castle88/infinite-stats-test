const infiniteAPI = require("../utils/infiniteAPI");

module.exports = {
  getMatch: async (req, res, next) => {
    const matchId = req.params.id;
    try {
      const match = await infiniteAPI.getSpecificMatch(matchId);

      res.status(200).json({ success: true, match });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
