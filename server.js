const express = require('express')

require('./mongoose.js')
const app = express()

const food = require('./models/food')

const cors = require('cors')

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send({status:true,message:`The get call is called`})
})

app.post('/createFood', (req,res) => {
    console.log(req.body)
    food.create(req.body).then((data) => {
        console.log(data)
        res.send({food:data})
    }).catch((err) => {
        console.log(err)
    })
})

app.get('/getFoods', (req, res) => {
    food.find().then((data) => {
        res.send({food:data})
    }).catch((err) => {
        console.log(err)
    })
})

app.listen(8000, () => {
        console.log(`The server is running at port 8000`)
})