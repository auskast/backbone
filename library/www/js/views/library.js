define(function (require) {
    'use strict';
    var LibraryCollection = require('collections/library');
    var BookView = require('views/book');
    var BookModel = require('models/book');
    return Backbone.View.extend({
        el: '#books',
        events: {
            'click #add': 'addBook'
        },
        initialize: function (initialBooks) {
            this.collection = new LibraryCollection(initialBooks);

            this.listenTo(this.collection, 'add', this.renderBook);

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
        },
        addBook: function (event) {
            event.preventDefault();
            var formData = {};

            $('#addBook div').children('input').each(function (item, el) {
                var value = $(el).val();
                if (value !== '') {
                    formData[el.id] = value;
                }
            });

            this.collection.add(new BookModel(formData));
        }
    });
});
