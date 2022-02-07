const fetch = require("node-fetch");
const createAppearance = require("./createAppearance");
const serviceRecordHelper = require("./createServiceRecord");
const matchHistoryHelper = require("./createMatchHistory");
const specMatchHelper = require("./createSpecMatch");
const createCSRS = require("./createCSRS");

module.exports = {
  getAppearance: async function (gamertag) {
    try {
      const url =
        "https://halo.api.stdlib.com/infinite@0.3.5/appearance/?gamertag=";

      const response = await fetch(url + gamertag, {
        headers: {
          Authorization: process.env.TOKEN,
        },
      });
      const data = await response.json();

      const appearance = createAppearance(data);

      return appearance;
    } catch (err) {
      console.log(err);
    }
  },

  getCSRS: async function (gamertag) {
    try {
      const url =
        "https://halo.api.stdlib.com/infinite@0.3.5/stats/csrs/?gamertag=";
      const response = await fetch(url + gamertag, {
        headers: { Authorization: process.env.TOKEN },
      });
      const data = await response.json();
      const csrs = createCSRS(data);

      return csrs;
    } catch (err) {
      console.log(err);
    }
  },

  getServiceRecord: async function (gamertag) {
    try {
      const url =
        "https://halo.api.stdlib.com/infinite@0.3.5/stats/service-record/multiplayer/?gamertag=";
      const response = await fetch(url + gamertag, {
        headers: { Authorization: process.env.TOKEN },
      });
      const data = await response.json();
      const serviceRecord = serviceRecordHelper.makeServiceRecord(data);

      return serviceRecord;
    } catch (err) {
      console.log(err);
    }
  },

  getMatchHistory: async function (gamerTag) {
    try {
      const url =
        "https://halo.api.stdlib.com/infinite@0.3.5/stats/matches/list/?gamertag=";
      const response = await fetch(url + gamerTag, {
        headers: {
          Authorization: process.env.TOKEN,
        },
      });
      const data = await response.json();
      const matchHistory = matchHistoryHelper.makeMatchHistory(data);

      return matchHistory;
    } catch (err) {
      console.log(err);
    }
  },

  getSpecificMatch: async function (matchid) {
    try {
      const url =
        "https://halo.api.stdlib.com/infinite@0.3.5/stats/matches/retrieve/?id=";
      const response = await fetch(url + matchid, {
        headers: {
          Authorization: process.env.TOKEN,
        },
      });
      const data = await response.json();
      const specificMatch = specMatchHelper.makeSpecMatch(data);

      return specificMatch;
    } catch (err) {
      console.log(err);
    }
  },
};
