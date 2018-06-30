const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/page-1', function (req, res) {
  res.render('page-1', { title: 'page-1', message: 'page-1.html' })
})

router.get('/page-2', function (req, res) {
  res.render('page-2', { title: 'page-2', message: 'page-2.html' })
})

router.get('/page-3', (req, res) => {
  res.sendFile(__dirname + './page-3.html')
})

router.get('/dirname', (req, res) => {
  res.send(__dirname)
})


module.exports = router