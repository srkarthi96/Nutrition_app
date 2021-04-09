const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    fibre: { type: Number, required: true },
    weight: {type: Number, required:true}
})

module.exports = mongoose.model("food",foodSchema)