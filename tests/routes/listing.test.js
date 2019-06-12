// Mongoose and mocking requests
const sinon = require('sinon');

const mongoose = require('mongoose')
require('sinon-mongoose')

// initialize the app and models
const app = require('../../index.js')

// sending requests
const agent = require('supertest').agent(app);
// validating results
const expect = require('chai').expect;

// get the model
const Listing = mongoose.model('Listing')

var Mock = sinon.mock(Listing)

beforeEach(() => {
  Mock.restore(); // Unwraps the spy
});

afterEach(() => {
  Mock.verify();
});

describe('Unit testing', () => {

  const request = {
    "type": "string",
    "price": "string",
    "fee": "string",
    "bidding": true,
    "address": {
      "street": "string",
      "zipcode": "string",
      "municipality": "string",
      "geo": {
        "lat": 0,
        "lng": 0
      }
    }
  }

  const expected = {
    "type": "string",
    "price": "string",
    "fee": "string",
    "bidding": true,
    "_id": "5d00c48d13c9df68b843bb01",
    "__v": 0,
    "address": {
      "street": "string",
      "zipcode": "string",
      "municipality": "string",
      "geo": {
        "lat": 0,
        "lng": 0
      }
    }
  }

  describe('listings.get', () => {

    it('Should return an array of all listings', (done) => {

      // Given (preconditions)
      Mock
        .expects('find')
        .chain('exec')
        .resolves([expected]);

      // When (someting happens)
      agent
        .get('/listings')
        .end((err, res) => {
          // Then (something should happen)
          expect(res.status).to.equal(200);
          expect(res.body).to.eql([expected]);
          done();
        });
    });

    it('Should return one listing', (done) => {
      Mock
        .expects('findById')
        .chain('exec')
        .resolves(expected)

      agent
        .get('/listings/' + expected._id)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.eql(expected);
          done();
        });
    })
  });

  describe('listings.post', () => {
    it('Should post a listing', (done) => {
      Mock
        .expects('create')
        .withArgs(request)
        .chain('exec')
        .resolves(expected)

      agent
        .post('/listings')
        .send(request)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.eql(expected);
          done();
        })
    })
  })
})
