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

afterEach( () => {
	Mock.verify();
});

	const expected = {
		//...
	}

describe('users.get', ()  => {

	it('Should return an array of all listings', (done) => {

		// Given (preconditions)
		Mock
		.expects('find')
		.chain('exec')
		.resolves([expected]);

		// When (someting happens)
		agent
		.get('/listings')
		.end((err,res) => {
		// Then (something should happen)
			expect(res.status).to.equal(200);
			expect(res.body).to.eql([expected]);
			done();
		});
	});

});