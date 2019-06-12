const express = require('express')
const router = express.Router()

const listing = require('./listing.js')

router.get("/listings", listing.get)
router.get("/listings/:listingId", listing.getById)
router.post("/listings", listing.post)
router.put("/listings/:listingId", listing.put)
router.delete("/listings/:listingId", listing.deleteById)

module.exports = router
