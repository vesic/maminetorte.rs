const express = require('express')
const router = express.Router()
const path = require('path')
const data = require('./data')

router.get('/page-1', function (req, res) {
  res.render('page-1', { images: data })
})

router.get('/page-2', function (req, res) {
  res.render('page-2', { images: data })
})

router.get('/page-3', function (req, res) {
  res.render('page-3', { images: data })
})

router.get('/page-4', function (req, res) {
  res.render('page-4', { images: data })
})

module.exports = router