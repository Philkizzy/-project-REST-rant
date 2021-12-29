require('dotenv').config()
const express = require('express')
const router = require('./controllers/places')
const app = express()

app.use('/places', require('./controllers/places'))


app.get('/', (req, res) =>{
    res.send("This is your data.")
})

app.get('*', (req, res) =>{
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)