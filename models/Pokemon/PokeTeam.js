const { model, Schema } = require("mongoose")

const teamSchema = new Schema({

    pokemon1: {
        type: String,
        // required: true,
    },
    pokemon2: {
        type: String,
        // required: true,

    },
    pokemon3: {
        type: String,
        // required: true,
    },
    pokemon4: {
        type:String,
        // required: true,
    },
    pokemon5: {
        type: String,
        // required: true,
    },
    pokemon6: {
        type: String,

    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }

})

const PokeTeam = model("Pokemon", teamSchema)

module.exports = PokeTeam

