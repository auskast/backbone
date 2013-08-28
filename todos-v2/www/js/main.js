require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-1.10.2',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        'backbone.localStorage': 'lib/backbone.localStorage',
        marionette: 'lib/backbone.marionette',
        tpl: 'lib/tpl',
        models: 'models',
        collections: 'collections',
        views: 'views',
        tpls: 'tpls',
        utils: 'utils',
        controllers: 'controllers',
        routers: 'routers'
    },
    shim: {
        'backbone.localStorage': ['backbone'],
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Backbone.Marionette'
        }
    }
});

window.Todos = {};

require([
    'app',
    'backbone',
    'routers/index',
    'controllers/index',
    'utils/factory'
], function (app, Backbone, Router, Controller) {
    'use strict';

    app.start();
    Todos.Factory(Router, {
        controller: Controller
    });
    Backbone.history.start();
});
