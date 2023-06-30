const axios = require("axios");

let players = [];

async function getPlayersByPage(page) {
  try {
    const response = await axios.get(
      `https://www.balldontlie.io/api/v1/players?page=${page}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch players");
  }
}

async function getPlayerById(id) {
  try {
    const response = await axios.get(
      `https://www.balldontlie.io/api/v1/players/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch player");
  }
}

function createPlayer(player) {
  const newPlayer = {
    id: player.id,
    first_name: player.first_name,
    last_name: player.last_name,
    position: player.position,
    team: {
      id: player.team.id,
      abbreviation: player.team.abbreviation,
      city: player.team.city,
      conference: player.team.conference,
      division: player.team.division,
      full_name: player.team.full_name,
      name: player.team.name,
    },
  };
  players.push(newPlayer);
  return newPlayer;
}

module.exports = {
  getPlayersByPage,
  getPlayerById,
  createPlayer,
};
