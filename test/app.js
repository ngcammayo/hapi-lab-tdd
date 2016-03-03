'use strict';

// Includes
var server  = require('../server');
var request = require('supertest');
var Lab     = require('lab');
var Code = require('code');

var lab = exports.lab = Lab.script();

// BDD Test utilities
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;
var before = lab.before;
var after = Lab.after;
var beforeEach = Lab.beforeEach;
var afterEach = Lab.afterEach;

// Configuration
var port    = 8000;
var ip      = "0.0.0.0";
var api_url = 'http://127.0.0.1:' + port;

describe('App API', function() {
    before(function(done) {
        // Start Server
        server.start(ip, port, {}, function (err) {
            done();
        });
    });

    describe('[GET /app] Get App', function() {
        it('should return { "message": "Hello World" } on success.', function(done) {
            request(api_url)
                .get('/app')
                .set('Content-Type', 'application/json; charset=utf-8')
                .end(function (err, res) {
                    if (err) throw err;
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.deep.equal({ "message": "Hello World" });
                    expect(res.body.message).to.equal("Hello World");
                    done();
                });
        });

        it('should return { "message": "Hello Norberto" } on success.', function(done) {
            request(api_url)
                .get('/app/Norberto')
                .set('Content-Type', 'application/json; charset=utf-8')
                .end(function (err, res) {
                    if (err) throw err;
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.deep.equal({ "message": "Hello Norberto" });
                    expect(res.body.message).to.equal("Hello Norberto");
                    done();
                });
        });

        it('should return { "message": "Hello Norberto" } on success.', function(done) {
            request(api_url)
                .get('/app2?name=Norberto')
                .set('Content-Type', 'application/json; charset=utf-8')
                .end(function (err, res) {
                    if (err) throw err;
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.deep.equal({ "message": "Hello Norberto" });
                    expect(res.body.message).to.equal("Hello Norberto");
                    done();
                });
        });

        it('should return { "message": "Hello Norberto" } on success.', function(done) {
            request(api_url)
                .post('/app')
                .send({ name: 'Norberto' })
                .set('Content-Type', 'application/json; charset=utf-8')
                .end(function (err, res) {
                    if (err) throw err;
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.deep.equal({ "message": "Hello Norberto" });
                    expect(res.body.message).to.equal("Hello Norberto");
                    done();
                });
        });
    });
});
