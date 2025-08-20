const express = require("express");
const router = express.Router();
const pokemonTeamController = require("../../controllers/pokemonTeamController");
const secureRoute = require("../../middleware/secureRoute");

router.post("/new", secureRoute, pokemonTeamController.createPokeTeam);
router.get("/", secureRoute, pokemonTeamController.pokeTeamIndex);
router.get("/:id", secureRoute, pokemonTeamController.showPokeTeam);
router.put("/:id", secureRoute, pokemonTeamController.updatePokeTeam);
router.delete("/:id", secureRoute, pokemonTeamController.deletePokeTeam);

module.exports = router;
