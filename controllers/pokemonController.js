const Pokemon = require('../models/Pokemon/Pokemon')

async function createMoveset(req, res){
    console.log('You are in the create Pokemon controller')
    try {
        console.log('Req.body is: ', req.body)
        const createdMoveset = await Pokemon.create(req.body)
        res.status(201).json(createdMoveset)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

async function movesetIndex(req, res){
    try {
        const allMovesets = await Pokemon.find()
        if (allMovesets.length){
            res.status(200).json(allMovesets)
        } else {
            res.sendStatus(204)
        }
        
    } catch (err){
        console.log(err)
    }
}

async function showMoveset(req, res){
    try {
        const moveset = await Pokemon.findById(req.params.id)
        if (moveset){
            res.status(200).json(moveset)
        } else {
            res.sendStatus(404)
        }
        
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

async function deleteMoveset(req, res){
    try {
        const moveset = await Pokemon.findByIdAndDelete(req.params.id)
        if (moveset){
            res.status(200).json(moveset)
        } else {
            res.sendStatus(404)
        }
        

    } catch (err){
        res.status(500).json({error: err.message})
    }
}

async function updateMoveset(req, res){
    try {
        const moveset = await Pokemon.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(200).json(moveset)
    } catch (err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    createMoveset,
    movesetIndex,
    showMoveset,
    deleteMoveset,
    updateMoveset
}