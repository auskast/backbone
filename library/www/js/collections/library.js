define(function (require) {
    'use strict';
    var BookModel = require('models/book');
    return Backbone.Collection.extend({
        model: BookModel
    });
});
