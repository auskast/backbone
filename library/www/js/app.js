require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-1.10.2',
        'jquery.dateFormat': 'lib/jquery.dateFormat-1.0',
        'jquery.ui': 'lib/jquery-ui-1.10.3.custom',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        text: 'lib/require-text',
        collections: 'collections',
        models: 'models',
        tpls: 'tpls',
        utils: 'utils',
        views: 'views'
    },
    shim: {
        'jquery.dateFormat': ['jquery'],
        'jquery.ui': ['jquery'],
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery'],
            exports: 'Backbone'
        }
    }
});

window.Library = {};

require([
    'views/library',
    'utils/factory',
    'jquery.ui',
    'jquery.dateFormat'
], function (LibraryView) {
    'use strict';
    $('#releaseDate').datepicker();

    Library.factory(LibraryView);
});
