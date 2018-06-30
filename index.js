const express = require('express')
const app = express()
const cakes = require('./cakes')
const path = require('path')

app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/torte', cakes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))