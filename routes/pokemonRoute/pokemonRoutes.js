const express = require('express')
const router = express.Router()
const pokemonTeamController = require('../../controllers/pokemonTeamController')
const secureRoute = require("../../middleware/secureRoute")

router.post('/new',secureRoute, pokemonTeamController.createPokeTeam)
router.get('/', pokemonTeamController.pokeTeamIndex)
router.get('/:id', pokemonTeamController.showPokeTeam)
router.put('/:id', pokemonTeamController.updatePokeTeam)
router.delete('/:id', pokemonTeamController.deletePokeTeam)

// router.post('/:id/moveset/new', pokemonController.createMoveset)
// router.put('/:id/moveset/:movesetId', pokemonController.updateMoveset)
// router.delete('/:id/moveset/:movesetId', pokemonController.deleteMoveset)

// router.post('/:id/stats/new', pokemonController.createStats)
// router.put('/:id/stats/:statsId', pokemonController.updateStats)
// router.delete('/:id/stats/:statsId', pokemonController.deleteStats)

module.exports = router