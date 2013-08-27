define(function (require) {
    'use strict';
    var _ = require('underscore');
    var Backbone = require('backbone');
    var bookTemplate = require('text!tpls/book.tpl');
    return Backbone.View.extend({
        tagName: 'div',
        className: 'bookContainer',
        template: _.template(bookTemplate),
        events: {
            'click .delete': 'deleteBook'
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },
        deleteBook: function () {
            this.model.destroy();
            this.remove();
        }
    });
});
