define(function (require) {
    'use strict';
    var Marionette = require('marionette');

    return Marionette.View.extend({
        tagName: 'span',
        initialize: function () {
            this.listenTo(this.collection, 'all', this.render, this);
        },
        render: function () {
            this.$el.html(this.collection.getCompleted().length);
        }
    });
});
