const express = require('express')
const router = express.Router()

const listing = require('./listing.js')

router.get("/listings", listing.get)

module.exports = router