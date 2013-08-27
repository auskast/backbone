define(function (require) {
    'use strict';
    var _ = require('underscore');
    var Backbone = require('backbone');
    var LibraryCollection = require('collections/library');
    var BookView = require('views/book');
    var BookModel = require('models/book');
    return Backbone.View.extend({
        el: '#books',
        events: {
            'click #add': 'addBook'
        },
        initialize: function () {
            this.collection = new LibraryCollection();
            this.collection.fetch({
                reset: true
            });

            this.render();

            this.listenTo(this.collection, 'add', this.renderBook);
            this.listenTo(this.collection, 'reset', this.render);
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
                    if (el.id === 'keywords') {
                        formData[el.id] = [];
                        _.each(value.split(' '), function (keyword) {
                            formData[el.id].push({
                                keyword: keyword
                            });
                        });
                    } else if (el.id === 'releaseDate') {
                        formData[el.id] = $('#releaseDate').datepicker('getDate').getTime();
                    } else {
                        formData[el.id] = value;
                    }
                }
                $(el).val('');
            });

            this.collection.create(formData);
        }
    });
});
