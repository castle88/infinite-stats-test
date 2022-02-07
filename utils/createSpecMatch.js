const specMatchHelper = {
  makeSpecMatch: (match) => {
    const matchDetails = specMatchHelper.strucutreMatchDetails(match);
    const eagle = specMatchHelper.eagleStats(match);
    const cobra = specMatchHelper.cobraStats(match);
    const players = specMatchHelper.getPLayers(match);

    return { matchDetails, eagle, cobra, players };
  },

  eagleStats: (match) => {
    const eagle = match.data.teams.details.filter(
      (teams) => teams.team.name === "Eagle"
    );
    const structuredEagle = specMatchHelper.structureTeams(eagle[0]);

    return structuredEagle;
  },

  cobraStats: (match) => {
    const cobra = match.data.teams.details.filter(
      (teams) => teams.team.name === "Cobra"
    );

    const structuredCobra = specMatchHelper.structureTeams(cobra[0]);

    return structuredCobra;
  },

  getPLayers: (match) => {
    const players = match.data.players;
    const structuredPlayers = players.map((player) =>
      specMatchHelper.structurePlayer(player)
    );
    const eaglePlayers = specMatchHelper.getEaglePlayers(structuredPlayers);
    const cobraPlayers = specMatchHelper.getCobraPlayers(structuredPlayers);

    return { eaglePlayers, cobraPlayers };
  },

  getEaglePlayers: (players) => {
    const eaglePlayers = players.filter(
      (player) => player.type !== "bot" && player.team === "Eagle"
    );

    return eaglePlayers;
  },

  getCobraPlayers: (players) => {
    const cobraPlayers = players.filter(
      (player) => player.type !== "bot" && player.team === "Cobra"
    );

    return cobraPlayers;
  },

  structureTeams: (team) => {
    const emblem_url = team.team.emblem_url;
    const kills = team.stats.core.summary.kills;
    const deaths = team.stats.core.summary.deaths;
    const assists = team.stats.core.summary.assists;
    const betrayals = team.stats.core.summary.betrayals;
    const accuracy = team.stats.core.shots.accuracy.toFixed(2);
    const damage_dealt = team.stats.core.damage.dealt;
    const kda = team.stats.core.kda;
    const kdr = team.stats.core.kdr.toFixed(2);
    const points = team.stats.core.points;
    const outcome = team.outcome;

    const structuredTeam = {
      emblem_url,
      outcome,
      stats: [
        {
          title: "Kills",
          stat: kills,
        },
        {
          title: "Deaths",
          stat: deaths,
        },
        {
          title: "Assists",
          stat: assists,
        },
        {
          title: "Betrayals",
          stat: betrayals,
        },
        {
          title: "Accuracy",
          stat: accuracy,
        },
        {
          title: "Damage Dealt",
          stat: damage_dealt,
        },
        {
          title: "KDA",
          stat: kda,
        },
        {
          title: "KDR",
          stat: kdr,
        },
        {
          title: "Points",
          stat: points,
        },
      ],
    };

    return structuredTeam;
  },

  structurePlayer: (player) => {
    const gamertag = player.gamertag;
    const team = player.team.name;
    const type = player.type;
    const kills = player.stats.core.summary.kills;
    const melee_kills = player.stats.core.breakdowns.kills.melee;
    const grenade_kills = player.stats.core.breakdowns.kills.grenades;
    const headshots = player.stats.core.breakdowns.kills.headshots;
    const power_weapon_kills =
      player.stats.core.breakdowns.kills["power_weapons"];
    const deaths = player.stats.core.summary.deaths;
    const assists = player.stats.core.summary.assists;
    const callouts = player.stats.core.breakdowns.assists.callouts;
    const kda = player.stats.core.kda;
    const kdr = player.stats.core.kdr.toFixed(2);
    const points = player.stats.core.points;
    const game_rank = player.rank;
    const betrayals = player.stats.core.summary.betrayals;
    const suicides = player.stats.core.summary.suicides;
    const damage_dealt = player.stats.core.damage.dealt;
    const damage_taken = player.stats.core.damage.taken;
    const shots_fired = player.stats.core.shots.fired;
    const shots_landed = player.stats.core.shots.landed;
    const shots_missed = player.stats.core.shots.missed;
    const accuracy = player.stats.core.shots.accuracy.toFixed(2);
    const medals = player.stats.core.breakdowns.medals;
    const structuredPlayer = {
      gamertag,
      team,
      type,
      record: [
        {
          title: "summary",
          stats: [
            {
              title: "Kills",
              stat: kills,
            },
            {
              title: "Deaths",
              stat: deaths,
            },
            {
              title: "Assists",
              stat: assists,
            },
            {
              title: "Betrayals",
              stat: betrayals,
            },
            {
              title: "Self Destructs",
              stat: suicides,
            },
          ],
        },
        {
          title: "damage",
          stats: [
            {
              title: "Damage Dealt",
              stat: damage_dealt,
            },
            {
              title: "Damage Taken",
              stat: damage_taken,
            },
          ],
        },
        {
          title: "kills",
          stats: [
            {
              title: "Melee Kills",
              stat: melee_kills,
            },
            {
              title: "Grenade Kills",
              stat: grenade_kills,
            },
            {
              title: "Headshots",
              stat: headshots,
            },
            {
              title: "Power Weapon Kills",
              stat: power_weapon_kills,
            },
          ],
        },
        {
          title: "shots",
          stats: [
            {
              title: "Shots Fired",
              stat: shots_fired,
            },
            {
              title: "Shots Landed",
              stat: shots_landed,
            },
            {
              title: "Shots Missed",
              stat: shots_missed,
            },
            {
              title: "Accuracy",
              stat: accuracy,
            },
          ],
        },
        {
          title: "K/D Stats",
          stats: [
            {
              title: "KDA",
              stat: kda,
            },
            {
              title: "KDR",
              stat: kdr,
            },
          ],
        },
        {
          title: "misc",
          stats: [
            {
              title: "Callouts",
              stat: callouts,
            },
            {
              title: "Points",
              stat: points,
            },
            {
              title: "Game Rank",
              stat: game_rank,
            },
          ],
        },
      ],
      medals,
    };

    return structuredPlayer;
  },
  strucutreMatchDetails: (match) => {
    const map_name = match.data.details.map.name;
    const map_img = match.data.details.map.asset.thumbnail_url;
    const playlist = match.data.details.category.name;

    const strucutredMatchDetails = {
      map_name,
      map_img,
      playlist,
    };

    return strucutredMatchDetails;
  },
};

module.exports = specMatchHelper;
