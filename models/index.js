const mongoose = require('mongoose')
const Listing = require('./listing.js')

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/homenet"

const connectDb = () => {
  return mongoose.connect(uri, { useNewUrlParser: true });
};

module.exports = {
  connectDb,
  models: {
    Listing
  }
} 