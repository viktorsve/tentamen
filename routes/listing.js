get = (req, res, next) => {
  req.models.Listing.find().then((listings) => {
      return res.send(listings);
    }).catch((error) => next(error))
}

module.exports = {
  get,
}