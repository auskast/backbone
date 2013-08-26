define(function (require) {
    'use strict';
    var LibraryCollection = require('collections/library');
    var BookView = require('views/book');
    return Backbone.View.extend({
        el: '#books',
        initialize: function (initialBooks) {
            this.collection = new LibraryCollection(initialBooks);
            this.render();
        },
        render: function () {
            this.collection.each(function (item) {
                this.renderBook(item);
            }, this);
        },
        renderBook: function (item) {
            var bookView = new BookView({
                model: item
            });
            this.$el.append(bookView.render().el);
        }
    });
});
