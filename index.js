const express = require('express')
const app = express()
const cakes = require('./cakes')

app.use(express.static(__dirname + '/public'))

app.use('/torte', cakes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))