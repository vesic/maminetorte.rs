const express = require('express')
const router = express.Router()
const path = require('path')
const data = require('./data')

router.get('/decije', function (req, res) {
  res.render('decije', { images: data.decije })
})

router.get('/bajke-i-dvorac', function (req, res) {
  res.render('bajke', { images: data.bajke })
})

router.get('/svecane', function (req, res) {
  res.render('svecane', { images: data.svecane })
})

router.get('/svadbene', function (req, res) {
  res.render('svadbene', { images: data.svadbene })
})

router.get('/torte-sa-zivotinjama', function (req, res) {
  res.render('zivotinje', { images: data.zivotinje })
})

router.get('/sportske-torte', function (req, res) {
  res.render('sport', { images: data.sport })
})

router.get('/crtani', function (req, res) {
  res.render('crtani', { images: data.crtani })
})

module.exports = router