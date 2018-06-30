var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

router.get('/page-1', function (req, res) {
  // res.sendFile(__dirname + '/public/page-1.html')
  res.sendFile("page-1.html", {"root": __dirname + '/public'});
})

router.get('/page-2', function (req, res) {
  // res.sendFile(__dirname + '/public/page-2.html')
  res.sendFile("page-2.html", {"root": __dirname + '/public'});
})

module.exports = router