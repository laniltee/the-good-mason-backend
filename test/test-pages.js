var expect = require('chai').expect;
var request = require('request');

const TEST_CONSTANTS = require('./test-constants');

const BASE_URL = 'http://localhost:8081/api/'

describe('Backend Health Tests', function () {
    describe('Server Health', function () {
        it('Server Is Running Healthy', function (done) {
            request(BASE_URL + 'health', function (error, response, body) {
                expect(body).to.equal('true');
                done();
            });
        });
    });
});

describe('API Endpoint Tests', function () {
    // Define feedback
    describe('Feedback', function () {
        it('Returns a 200 response code when GET /feedback', function (done) {
            request(BASE_URL + 'feedback', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('Returns a array of feedback objects', function (done) {
            request(BASE_URL + 'feedback', function (error, response, body) {
                expect(JSON.parse(response.body)).to.be.an('array');
                done();
            });
        });
        // it('Adds a given feedback to the database with auto generated id', function (done) {
        //     request.post({
        //         url: BASE_URL + 'feedback', 
        //         body: TEST_CONSTANTS.MOCK_FEEDBACK,
        //         json: true
        //     }, function (error, response, body) {
        //         expect(response.statusCode).to.equal(200);
        //         expect(response.body).to.have.property('email');
        //         done();
        //     });
        // });
    });

    // Operations related to service providers
    describe('Service Providers', function () {
        it('Returns a list of service providers', function (done) {
            request(BASE_URL + 'providers', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    //Operations related to users
    describe('Users', function () {
        it('Returns a list or array of users', function (done) {
            request(BASE_URL + 'users', function (error, response, body) {
                expect(JSON.parse(response.body)).to.be.an('array');
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('Returns status 401 when unauthorized user is trying to log in', function(done){
            request.post({
                url: BASE_URL + 'users/login', 
                body: TEST_CONSTANTS.UNAUTHORIZED_USER,
                json: true
            }, function (error, response, body) {
                expect(response.statusCode).to.equal(TEST_CONSTANTS.SERVER_UNAUTHORIZED_STATUS);
                done();
            });
        });
        it('Returns a valid user when authorized user logs in', function(done){
            request.post({
                url: BASE_URL + 'users/login', 
                body: TEST_CONSTANTS.AUTHORIZED_USER,
                json: true
            }, function (error, response, body) {
                expect(response.statusCode).to.equal(TEST_CONSTANTS.SERVER_OK_STATUS);
                expect(response.body).to.have.property('email');
                done();
            });
        });
    });

    //Operations related to services
    describe('Services', function () {
        it('Returns a list of comments', function (done) {
            request(BASE_URL + 'users', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('Returns an array of categories', function (done) {
            request(BASE_URL + 'providers/search/categories/', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(response.body)).to.be.an('array');
                done();
            });
        });
        it('Returns an list with at least one item for a valid name search', function (done) {
            request(BASE_URL + 'providers/search/name/' + TEST_CONSTANTS.SEARCH_PROVIDER_NAME, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(response.body)).to.be.an('array');
                expect(JSON.parse(response.body)).to.have.length.greaterThan(0);
                done();
            });
        });
        it('Shows profile of a service provider for a valid id', function (done) {
            request(BASE_URL + 'providers/' + TEST_CONSTANTS.VALID_PROFILE_ID, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(response.body)).to.be.an('object');
                expect(JSON.parse(response.body)).to.have.property('_id');
                done();
            });
        });
    });
});