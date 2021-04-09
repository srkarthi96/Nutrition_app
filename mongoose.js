const mongoose = require('mongoose')

const db = "mongodb://localhost:27017/nutrition_app"

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("DB connected")
})

