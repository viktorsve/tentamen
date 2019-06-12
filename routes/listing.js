get = (req, res, next) => {
  const query = req.query || {};
  req.models.Listing.find(query).then(listings => {
    res.send(listings);
  }).catch(err => next(err))
}

getById = (req, res, next) => {
  req.models.Listing.findById(req.params.listingId).then(listing => {
    res.send(listing);
  }).catch(err => next(err))
}

post = (req, res, next) => {
  req.models.Listing.create({
    type: req.body.type,
    price: req.body.price,
    fee: req.body.fee,
    bidding: req.body.bidding,
    address: {
      street: req.body.address.street,
      zipcode: req.body.address.zipcode,
      municipality: req.body.address.municipality,
      geo: {
        lat: req.body.address.geo.lat,
        lng: req.body.address.geo.lng,
      }
    }
  }).then(listing => {
    return res.status(201).send(listing)
  }).catch(err => next(err))
}

put = (req, res, next) => {
  const generateId = new mongoose.Types.ObjectId();
  const query = req.params.listingId;

  req.models.Listing.findById(req.params.listingId).exec((err, doc) => {
    req.models.Listing.updateOne({
        _id: doc ? query : generateId
      }, {
        type: req.body.type,
        price: req.body.price,
        fee: req.body.fee,
        bidding: req.body.bidding,
        address: {
          street: req.body.address.street,
          zipcode: req.body.address.zipcode,
          municipality: req.body.address.municipality,
          geo: {
            lat: req.body.address.geo.lat,
            lng: req.body.address.geo.lng,
          }
        }
      }, {
        new: true,
        upsert: true,
        runValidators: true
      })
      .then(listing => {
        listing.upserted ? res.status(201).send({
          message: "New listing created"
        }) : (listing.nModified ? res.status(200).send({
          message: "Listing was updated"
        }) : res.status(204).send({
          message: "No listing was created or updated"
        }))
      }).catch(err => next(err))
  })
}

deleteById = (req, res, next) => {
  req.models.Listing.findByIdAndDelete(req.params.listingId).then(deleted => {
    deleted ? res.status(200).send({
      message: "Listing deleted successfully"
    }) : res.sendStatus(204)
  }).catch(err => next(err))
}

module.exports = {
  get,
  getById,
  post,
  put,
  deleteById
}
