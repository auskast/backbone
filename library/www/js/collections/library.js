define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    var BookModel = require('models/book');
    return Backbone.Collection.extend({
        model: BookModel,
        url: '/api/books'
    });
});
