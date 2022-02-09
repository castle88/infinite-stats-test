const serviceRecordHelper = {
  getSummary: (serviceRecord) => {
    const summary = serviceRecord.data.core.summary;
    const structuredSummary = [];
    for (let key in summary) {
      if (key !== "vehicles") {
        structuredSummary.push({ title: key, stat: summary[key] });
      }
    }

    return structuredSummary;
  },
  getDamage: (serviceRecord) => {
    const damageStats = serviceRecord.data.core.damage;
    const structuredDamage = [];

    for (let key in damageStats) {
      structuredDamage.push({ title: key, stat: damageStats[key] });
    }
    return structuredDamage;
  },
  getVehicles: (serviceRecord) => {
    const vehicles = serviceRecord.data.core.summary.vehicles;
    const structuredVehicles = [];

    for (let key in vehicles) {
      structuredVehicles.push({ title: key, stat: vehicles[key] });
    }

    return structuredVehicles;
  },
  getShots: (serviceRecord) => {
    const shotsStats = serviceRecord.data.core.shots;
    const structuredShots = [];
    for (let key in shotsStats) {
      key === "accuracy"
        ? structuredShots.push({
            title: key,
            stat: `${shotsStats[key].toFixed(2)}%`,
          })
        : structuredShots.push({ title: key, stat: shotsStats[key] });
    }

    return structuredShots;
  },
  getKills: (serviceRecord) => {
    const killStats = serviceRecord.data.core.breakdowns.kills;
    const structuredKills = [];

    for (let key in killStats) {
      structuredKills.push({ title: key, stat: killStats[key] });
    }

    return structuredKills;
  },
  getAssists: (serviceRecord) => {
    const assistStats = serviceRecord.data.core.breakdowns.assists;
    const structuredAssists = [];

    for (let key in assistStats) {
      structuredAssists.push({ title: key, stat: assistStats[key] });
    }

    return structuredAssists;
  },
  getMatchStats: (serviceRecord) => {
    const matchStats = serviceRecord.data.core.breakdowns.matches;
    const structuredMatches = [];

    for (let key in matchStats) {
      structuredMatches.push({ title: key, stat: matchStats[key] });
    }

    return structuredMatches;
  },
  getKDStats: (serviceRecord) => {
    const kdStats = [
      { title: "kda", stat: serviceRecord.data.core.kda.toFixed(2) },
      { title: "kdr", stat: `${serviceRecord.data.core.kdr.toFixed(2)}%` },
    ];

    return kdStats;
  },
  getTotals: (serviceRecord) => {
    const totals = [
      { title: "matches played", stat: serviceRecord.data["matches_played"] },
      { title: "time played", stat: serviceRecord.data["time_played"].human },
      {
        title: "win rate",
        stat: `${serviceRecord.data["win_rate"].toFixed(2)}%`,
      },
    ];
    return totals;
  },
  getMedalList: (serviceRecord) => {
    const medalsArr = serviceRecord.data.core.breakdowns.medals;

    return medalsArr;
  },
  getTopNineMedals: (medalsArr) => {
    const sorted = medalsArr.sort((a, b) => b.count - a.count);
    // const top = sorted.slice(0, 9);

    return sorted;
  },

  makeServiceRecord: (data) => {
    const summary = serviceRecordHelper.getSummary(data);
    const vehicles = serviceRecordHelper.getVehicles(data);
    const damage = serviceRecordHelper.getDamage(data);
    const shots = serviceRecordHelper.getShots(data);
    const kills = serviceRecordHelper.getKills(data);
    const assists = serviceRecordHelper.getAssists(data);
    const matchStats = serviceRecordHelper.getMatchStats(data);
    const kDStats = serviceRecordHelper.getKDStats(data);
    const totals = serviceRecordHelper.getTotals(data);
    const topMedals = serviceRecordHelper.getTopNineMedals(
      serviceRecordHelper.getMedalList(data)
    );

    const serviceRecord = {
      serviceRecord: [
        {
          category: "Summary",
          stats: summary,
        },
        {
          category: "Vehicles",
          stats: vehicles,
        },
        {
          category: "Damage",
          stats: damage,
        },
        {
          category: "Kills",
          stats: kills,
        },
        {
          category: "Shots",
          stats: shots,
        },
        {
          category: "Assists",
          stats: assists,
        },
        {
          category: "MatchStats",
          stats: matchStats,
        },
        {
          category: "K/D Stats",
          stats: kDStats,
        },
        {
          category: "Totals",
          stats: totals,
        },
      ],
      topMedals,
    };

    return serviceRecord;
  },
};

module.exports = serviceRecordHelper;
