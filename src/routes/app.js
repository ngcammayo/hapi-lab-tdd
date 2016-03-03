'use strict';

var Joi  = require('joi');
var app    = require('../controllers/app');

var routes = [
    {
        method: 'GET',
        path: '/app',
        config: {
            handler: app.getHelloWorld
        }
    },
    {
        method: 'POST',
        path: '/app',
        config: {
            handler: app.postHelloByName,
            validate: {
                payload: {
                    name: Joi.string()
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/app/{name}',
        config: {
            handler: app.getHelloByName
        }
    },
    {
        method: 'GET',
        path: '/app2',
        config: {
            handler: app.getHelloByQueryName,
            validate: {
                query: {
                    name: Joi.string()
                }
            }
        }
    }
];

module.exports.routes = function (server) {
    server.route(routes);
};
