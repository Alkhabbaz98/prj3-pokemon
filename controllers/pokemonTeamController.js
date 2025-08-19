const PokeTeam = require('../models/Pokemon/PokeTeam')
const jwt = require('jsonwebtoken')
async function createPokeTeam(req, res){
// const user = jwt.decode(req.headers.authorization)

    console.log('You are in the create Pokemon controller')
    try {
        console.log('Req.body is: ', req.body)
        const createdPokeTeam = await PokeTeam.create({
            ...req.body,
            user: req.user.id
        }
            
        )
        res.status(201).json(createdPokeTeam)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

async function pokeTeamIndex(req, res){
    try {
        const allPokeTeams = await PokeTeam.find()
        if (allPokeTeams.length){
            res.status(200).json(allPokeTeams)
        } else {
            res.sendStatus(204)
        }
        
    } catch (err){
        console.log(err)
    }
}

async function showPokeTeam(req, res){
    try {
        const team = await PokeTeam.findById(req.params.id)
        if (team){
            res.status(200).json(team)
        } else {
            res.sendStatus(404)
        }
        
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

async function deletePokeTeam(req, res){
    try {
        const team = await PokeTeam.findByIdAndDelete(req.params.id)
        if (team){
            res.status(200).json(team)
        } else {
            res.sendStatus(404)
        }
        

    } catch (err){
        res.status(500).json({error: err.message})
    }
}

async function updatePokeTeam(req, res){
    try {
        const team = await PokeTeam.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(200).json(team)
    } catch (err){
        res.status(500).json({error: err.message})
    }
}

// ======================================
// moveset

// async function createMoveset(req, res){
//     console.log('You are in the create Moveset controller')
//     try {
//         const pokemon = await Pokemon.findById(req.params.id)
//         console.log('Req.body is: ', req.body)
//         pokemon.moveset.push(req.body)
//         await pokemon.save()
//         const createdMoveset = pokemon.moveset[pokemon.moveset.lenght-1]
//         res.status(201).json(createdMoveset)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({error: err.message})
//     }
// }



// async function deleteMoveset(req, res){
//     try {
//         const pokemon = await Pokemon.findById(req.params.id)
//         pokemon.moveset.remove({_id: req.params.movesetId})
//         await pokemon.save()
//         res.status(200).json({message: "Moveset Deleted"})

//     } catch (err){
//         res.status(500).json({error: err.message})
//     }
// }

// async function updateMoveset(req, res){
   
//     try {
//         const pokemon = await Pokemon.findById(req.params.id)
//         console.log('Req.body is: ', req.body)
//         const moveset = pokemon.moveset.id(req.params.movesetId)
//         moveset.level = req.body.level
//         moveset.name = req.body.name
//         moveset.type = req.body.type
//         moveset.category=  req.body.category
//         moveset.power = req.body.power
//         moveset.accuracy = req.body.accuracy
//         moveset.method = req.body.method

//         await pokemon.save()
//         res.status(200).json({message: "Updated"})
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({error: err.message})
//     }
// }


// // ======================================

// async function createStats(req, res){
//     console.log('You are in the create Moveset controller')
//     try {
//         const pokemon = await Pokemon.findById(req.params.id)
//         console.log('Req.body is: ', req.body)
//         pokemon.stats.push(req.body)
//         await pokemon.save()
//         const createdStats = pokemon.stats[pokemon.stats.lenght-1]
//         res.status(201).json(createdStats)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({error: err.message})
//     }
// }



// async function deleteStats(req, res){
//     try {
//         const pokemon = await Pokemon.findById(req.params.id)
//         pokemon.stats.remove({_id: req.params.statsId})
//         await pokemon.save()
//         res.status(200).json({message: "Stats Deleted"})

//     } catch (err){
//         res.status(500).json({error: err.message})
//     }
// }

// async function updateStats(req, res){
   
//     try {
//         const pokemon = await Pokemon.findById(req.params.id)
//         console.log('Req.body is: ', req.body)
//         const stats = pokemon.stats.id(req.params.statsId)
//         stats.hp = req.body.hp
//         stats.attack = req.body.attack
//         stats.defense = req.body.type
//         stats.special_attack=  req.body.special_attack
//         stats.special_defense = req.body.special_defense
//         stats.speed = req.body.speed

//         await pokemon.save()
//         res.status(200).json({message: "Updated"})
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({error: err.message})
//     }
// }





    
    
    module.exports = {
    createPokeTeam,    
    pokeTeamIndex,
    showPokeTeam,
    deletePokeTeam,
    updatePokeTeam,
}