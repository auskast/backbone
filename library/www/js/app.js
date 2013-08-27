require.config({
    baseUrl: 'js',
    paths: {
        text: 'lib/require-text',
        collections: 'collections',
        models: 'models',
        tpls: 'tpls',
        utils: 'utils',
        views: 'views'
    }
});

window.Library = {};

require(['views/library', 'utils/factory'], function (LibraryView) {
    'use strict';
    $('#releaseDate').datepicker();

    Library.factory(LibraryView);
});
