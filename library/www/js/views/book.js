define(function (require) {
    'use strict';
    var bookTemplate = require('text!tpls/book.tpl');
    return Backbone.View.extend({
        tagName: 'div',
        className: 'bookContainer',
        template: _.template(bookTemplate),
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });
});
