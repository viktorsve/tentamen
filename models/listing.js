mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  fee: {
    type: String,
    required: true
  },
  bidding: {
    type: Boolean,
    required: true
  },
  address: {
    street: {
      type: String,
      required: true
    },
    zipcode: {
      type: String,
      required: true
    },
    municipality: {
      type: String,
      required: true
    },
    geo: {
      lat: {
        type: Number,
        required: true
      },
      lng: {
        type: Number,
        required: true
      }
    },
  },
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
