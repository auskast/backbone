require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-1.10.2',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        text: 'lib/require-text',
        models: 'models',
        collections: 'collections',
        views: 'views',
        tpls: 'tpls'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['jquery', 'underscore', 'backbone'], function () {
    'use strict';

});
