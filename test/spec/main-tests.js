/*global mocha*/
'use strict';
require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/lodash/dist/lodash',
        backbone: '../bower_components/backbone/backbone',
        validation: '../bower_components/backbone.validation/dist/backbone-validation-amd'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require.config({
    baseUrl: '../app/scripts',
    paths: {
        chai: '../../app/bower_components/chai/chai',
        sinon: '../../app/bower_components/sinon/lib/sinon'
    }
});

require([
    'chai'
], function (chai) {
    chai.should();
    window.expect = chai.expect;
    mocha.setup('bdd');

    require([
        'spec/specs.js'
    ], function () {
        mocha.run();
    });
});