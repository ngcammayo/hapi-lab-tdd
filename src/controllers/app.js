'use strict';

exports.getHelloWorld = function(request, reply) {
    reply({ "message": "Hello World" });
};

exports.postHelloByName = function(request, reply) {
    reply({ "message": "Hello " + request.payload.name });
};

exports.getHelloByName = function(request, reply) {
    reply({ "message": "Hello " + request.params.name });
};

exports.getHelloByQueryName = function(request, reply) {
    reply({ "message": "Hello " + request.query.name });
};
