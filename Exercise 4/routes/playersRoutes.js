const express = require("express");
const playersController = require("../controllers/playersController");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const players = await playersController.getPlayersByPage(page);
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const playerId = req.params.id;
    const player = await playersController.getPlayerById(playerId);
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", (req, res) => {
  try {
    const player = req.body;
    const newPlayer = playersController.createPlayer(player);
    res.json(newPlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
