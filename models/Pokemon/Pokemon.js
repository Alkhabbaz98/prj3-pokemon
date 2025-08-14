const { model, Schema } = require("mongoose")

const statsSchema = new Schema({
    hp: {
        type: Number,
        required: true
    },

    attack: {
        type: Number,
        required: true
    },

    defense: {
        type: Number,
        required: true
    },

    special_attack: {
        type: Number,
        required: true
    },

    special_defense: {
        type: Number,
        required: true
    },

    speed: {
        type: Number,
        required: true
    },

})


const movesetSchema = new Schema({
    level: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    power: {
        type: String,
        required: true
    },

    accuracy: {
        type: String,
        required: true
    },

    method: {
        type: String,
        required: true
    }

})

const pokemonSchema = new Schema({
    pokedex_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,

    },
    type: {
        type: String,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    ability: {
        type: String,

    },
    stats: [statsSchema],

    moveset: [movesetSchema],



})

const Pokemon = model("Pokemon", pokemonSchema)

module.exports = Pokemon