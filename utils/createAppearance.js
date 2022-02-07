module.exports = (data) => {
  return {
    gamertag: data.additional.gamertag,
    emblem: data.data["emblem_url"],
    servicetag: data.data["service_tag"],
  };
};
