const Pokemon = require('../models/Pokemon/Pokemon')

async function createPokemon(req, res){
    console.log('You are in the create Pokemon controller')
    try {
        console.log('Req.body is: ', req.body)
        const createdPokemon = await Pokemon.create(req.body)
        res.status(201).json(createdPokemon)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

async function pokemonIndex(req, res){
    try {
        const allPokemons = await Pokemon.find()
        if (allPokemons.length){
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
        if (pokemon){
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

// ======================================
// moveset

async function createMoveset(req, res){
    console.log('You are in the create Moveset controller')
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        console.log('Req.body is: ', req.body)
        pokemon.moveset.push(req.body)
        await pokemon.save()
        const createdMoveset = pokemon.moveset[pokemon.moveset.lenght-1]
        res.status(201).json(createdMoveset)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}



async function deleteMoveset(req, res){
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        pokemon.moveset.remove({_id: req.params.movesetId})
        await pokemon.save()
        res.status(200).json({message: "Moveset Deleted"})

    } catch (err){
        res.status(500).json({error: err.message})
    }
}

async function updateMoveset(req, res){
   
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        console.log('Req.body is: ', req.body)
        const moveset = pokemon.moveset.id(req.params.movesetId)
        moveset.level = req.body.level
        moveset.name = req.body.name
        moveset.type = req.body.type
        moveset.category=  req.body.category
        moveset.power = req.body.power
        moveset.accuracy = req.body.accuracy
        moveset.method = req.body.method

        await pokemon.save()
        res.status(200).json({message: "Updated"})
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}


// ======================================

async function createStats(req, res){
    console.log('You are in the create Moveset controller')
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        console.log('Req.body is: ', req.body)
        pokemon.stats.push(req.body)
        await pokemon.save()
        const createdStats = pokemon.stats[pokemon.stats.lenght-1]
        res.status(201).json(createdStats)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}



async function deleteStats(req, res){
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        pokemon.stats.remove({_id: req.params.statsId})
        await pokemon.save()
        res.status(200).json({message: "Stats Deleted"})

    } catch (err){
        res.status(500).json({error: err.message})
    }
}

async function updateStats(req, res){
   
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        console.log('Req.body is: ', req.body)
        const stats = pokemon.stats.id(req.params.statsId)
        stats.hp = req.body.hp
        stats.attack = req.body.attack
        stats.defense = req.body.type
        stats.special_attack=  req.body.special_attack
        stats.special_defense = req.body.special_defense
        stats.speed = req.body.speed

        await pokemon.save()
        res.status(200).json({message: "Updated"})
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}





    
    
    module.exports = {
    createPokemon,    
    pokemonIndex,
    showPokemon,
    deletePokemon,
    updatePokemon,

    createMoveset,
    deleteMoveset,
    updateMoveset,

    createStats,
    deleteStats,
    updateStats
}