const matchHistoryHelper = {
  makeMatchHistory: (matchHistory) => {
    const rankedMatches = matchHistoryHelper.getRankedMatches(matchHistory);
    const unrankedMatches = matchHistoryHelper.getUnrankedMatches(matchHistory);

    const playerMatchHistory = {
      ranked: rankedMatches,
      unranked: unrankedMatches,
      // build unranked functions to split by playlist name => match.details.playlist.name === 'Quick Play'
    };

    return playerMatchHistory;
  },

  getRankedMatches: (matchHistory) => {
    const rankedMatches = matchHistory.data.filter(
      (match) => match.details.playlist.properties.ranked
    );
    const openqueue = matchHistoryHelper.getOpen(rankedMatches);
    const soloDuoQueue = matchHistoryHelper.getSoloDuo(rankedMatches);

    return {
      open: openqueue,
      controller: soloDuoQueue[0],
      mnk: soloDuoQueue[1],
    };
  },

  getUnrankedMatches: (matchHistory) => {
    const unrankedMatches = matchHistory.data.filter(
      (match) => match.details.playlist.properties.ranked === false
    );
    const structuredUnranked =
      matchHistoryHelper.structureMatch(unrankedMatches);

    return structuredUnranked;
  },

  getOpen: (rankedMatches) => {
    const openqueue = rankedMatches.filter(
      (match) => match.details.playlist.properties.queue === "open"
    );
    const structuredOpen = matchHistoryHelper.structureMatch(openqueue);

    return structuredOpen;
  },

  getSoloDuo: (rankedMatches) => {
    const soloDuoQueue = rankedMatches.filter(
      (match) => match.details.playlist.properties.queue === "solo-duo"
    );

    const controller = matchHistoryHelper.getControllerInput(soloDuoQueue);
    const mnk = matchHistoryHelper.getMNKInput(soloDuoQueue);

    return [controller, mnk];
  },

  getControllerInput: (soloDuoQueue) => {
    const controller = soloDuoQueue.filter(
      (match) => match.details.playlist.properties.input === "controller"
    );
    const structuredController = matchHistoryHelper.structureMatch(controller);

    return structuredController;
  },

  getMNKInput: (soloDuoQueue) => {
    const mnk = soloDuoQueue.filter(
      (match) => match.details.playlist.properties.input !== "controller"
    );
    const structuredMNK = matchHistoryHelper.structureMatch(mnk);

    return structuredMNK;
  },
  structureMatch: (gamesArr) => {
    const structuredMatch = gamesArr.map((game) => {
      const mapId = game.id;
      const mapName = game.details.map.name;
      const gameType = game.details.category.name;
      const mapImg = game.details.map.asset.thumbnail_url;
      const outcome = game.player.outcome;
      return { mapId, mapName, gameType, mapImg, outcome };
    });

    return structuredMatch;
  },
};

module.exports = matchHistoryHelper;
