const Pokemon = require('../models/pokemon')

async function createPokemon(req, res){
    console.log('You are in the create Pokemon controller')
    try {
        console.log('Req.body is: ', req.body)
        const createdTPokemon = await Pokemon.create(req.body)
        res.status(201).json(createdPokemon)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

async function pokemonIndex(req, res){
    try {
        const allPokemons = await Pokemon.find()
        if (allTracks.length){
            res.status(200).json(allPokemons)
        } else {
            res.sendStatus(204)
        }
        
    } catch (err){
        console.log(err)
    }
}

async function showPokemon(req, res){
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        if (track){
            res.status(200).json(pokemon)
        } else {
            res.sendStatus(404)
        }
        
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

async function deletePokemon(req, res){
    try {
        const pokemon = await Pokemon.findByIdAndDelete(req.params.id)
        if (pokemon){
            res.status(200).json(pokemon)
        } else {
            res.sendStatus(404)
        }
        

    } catch (err){
        res.status(500).json({error: err.message})
    }
}

async function updatePokemon(req, res){
    try {
        const pokemon = await Pokemon.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(200).json(pokemon)
    } catch (err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    createPokemon,
    pokemonIndex,
    showPokemon,
    deletePokemon,
    updatePokemon
}