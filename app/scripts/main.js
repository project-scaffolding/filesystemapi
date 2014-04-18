'use strict';

require.config({
	deps: ['openq/app'],
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