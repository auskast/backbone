define(function () {
    'use strict';
    return Backbone.Model.extend({
        defaults: {
            coverImage: 'img/placeholder.png',
            title: 'No title',
            author: 'Unknown',
            releaseDate: 'Unknown',
            keywords: 'None'
        }
    });
});
