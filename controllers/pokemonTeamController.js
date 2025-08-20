const PokeTeam = require("../models/Pokemon/PokeTeam");
const jwt = require("jsonwebtoken");
async function createPokeTeam(req, res) {
  // const user = jwt.decode(req.headers.authorization)

  console.log("You are in the create Pokemon controller");
  try {
    console.log("Req.body is: ", req.body);
    const createdPokeTeam = await PokeTeam.create({
      ...req.body,
      user: req.user.id,
    });
    res.status(201).json(createdPokeTeam);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}

async function pokeTeamIndex(req, res) {
  try {
    const allPokeTeams = await PokeTeam.find().populate("user", "username");
    if (allPokeTeams.length) {
      res.status(200).json(allPokeTeams);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err);
  }
}

async function showPokeTeam(req, res) {
  try {
    const team = await PokeTeam.findById(req.params.id);
    if (team) {
      res.status(200).json(team);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deletePokeTeam(req, res) {
  try {
    const team = await PokeTeam.findByIdAndDelete(req.params.id);
    if (team) {
      res.status(200).json(team);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updatePokeTeam(req, res) {
  try {
    const team = await PokeTeam.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(team);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createPokeTeam,
  pokeTeamIndex,
  showPokeTeam,
  deletePokeTeam,
  updatePokeTeam,
};
