const express = require('express')
const app = express()


app.get('/', (req, res) =>{
    res.send("This is your data.")
})

app.listen(3000)