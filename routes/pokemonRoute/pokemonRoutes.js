const express = require('express')
const router = express.Router()
const pokemonController = require('../../controllers/pokemonController')

router.post('/new', pokemonController.createPokemon)
router.get('/', pokemonController.pokemonIndex)
router.get('/:id', pokemonController.showPokemon)
router.put('/:id', pokemonController.updatePokemon)
router.delete('/:id', pokemonController.deletePokemon)
module.exports = router