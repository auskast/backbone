define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Templates = require('templates');
    var ActiveCountView = require('views/active-count');
    var CompletedCountView = require('views/completed-count');

    return Marionette.Layout.extend({
        template: Templates.footer,
        regions: {
            count: '#todo-count strong',
            completedCount: '#clear-completed span'
        },
        ui: {
            filters: '#filters a',
            clearCompleted: '#clear-completed',
            items: '#todo-count>span'
        },
        events: {
            'click #clear-completed': 'onClearClick'
        },
        initialize: function () {
            this.listenTo(Backbone.Events, 'todoList:filter', this.updateFilterSelection, this);
            this.listenTo(this.collection, 'all', this.showClearCompleted, this);
            this.listenTo(this.collection, 'all', this.updateItemsLabel, this);
        },
        onRender: function () {
            this.count.show(Todos.Factory(ActiveCountView, {
                collection: this.collection
            }));
            this.completedCount.show(Todos.Factory(CompletedCountView, {
                collection: this.collection
            }));
        },
        updateFilterSelection: function (filter) {
            this.ui.filters
                .removeClass('selected')
                .filter('[href="#/' + filter + '"]')
                .addClass('selected');
        },
        onClearClick: function () {
            Backbone.Events.trigger('todoList:clear:completed');
        },
        showClearCompleted: function () {
            if (this.collection.getCompleted().length === 0) {
                this.ui.clearCompleted.hide();
            } else {
                this.ui.clearCompleted.show();
            }
        },
        updateItemsLabel: function () {
            if (this.collection.getActive().length === 1) {
                this.ui.items.html('item');
            } else {
                this.ui.items.html('items');
            }
        }
    });
});
