define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    return Backbone.Model.extend({
        defaults: {
            coverImage: 'img/placeholder.png',
            title: 'No title',
            author: 'Unknown',
            releaseDate: 'Unknown',
            keywords: 'None'
        },
        idAttribute: '_id'
    });
});
