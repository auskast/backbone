define(function (require) {
    'use strict';
    var Marionette = require('marionette');
    var Templates = require('templates');
    var TodoItemView = require('views/todo-item');

    return Marionette.CompositeView.extend({
        template: Templates.todoList,
        itemView: TodoItemView,
        itemViewContainer: '#todo-list',
        ui: {
            toggle: '#toggle-all'
        },
        events: {
            'click #toggle-all': 'onToggleAllClick'
        },
        initialize: function () {
            this.listenTo(this.collection, 'all', this.updateToggleCheckbox, this);
        },
        onRender: function () {
            this.updateToggleCheckbox();
        },
        updateToggleCheckbox: function () {
            var allCompleted = this.collection.reduce(function (left, right) {
                return left && right.get('completed');
            }, true);
            this.ui.toggle.prop('checked', allCompleted);
        },
        onToggleAllClick: function (event) {
            var isChecked = event.currentTarget.checked;
            this.collection.each(function (todo) {
                todo.save({
                    'completed': isChecked
                });
            });
        }
    });
});
