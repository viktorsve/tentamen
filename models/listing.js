mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;