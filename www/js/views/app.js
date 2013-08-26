define(function (require) {
    'use strict';
    var TodoView = require('views/todo');
    var statsTemplate = require('text!tpls/stats.tpl');
    return Backbone.View.extend({
        el: '#todoapp',
        statsTemplate: _.template(statsTemplate),
        events: {
            'keypress #new-todo': 'createOnEnter',
            'click #clear-completed': 'clearCompleted',
            'click #toggle-all': 'toggleAllComplete'
        },
        initialize: function () {
            this.allCheckbox = this.$('#toggle-all')[0];
            this.$input = this.$('#new-todo');
            this.$footer = this.$('#footer');
            this.$main = this.$('#main');

            this.listenTo(Todos.todos, 'add', this.addOne);
            this.listenTo(Todos.todos, 'reset', this.addAll);
            this.listenTo(Todos.todos, 'change:completed', this.filterOne);
            this.listenTo(Todos.todos, 'filter', this.filterAll);
            this.listenTo(Todos.todos, 'all', this.render);

            Todos.todos.fetch();
        },
        render: function () {
            var completed = Todos.todos.completed().length;
            var remaining = Todos.todos.remaining().length;

            if (Todos.todos.length) {
                this.$main.show();
                this.$footer.show();

                this.$footer.html(this.statsTemplate({
                    completed: completed,
                    remaining: remaining
                }));

                this.$('#filters li a')
                    .removeClass('selected')
                    .filter('[href="#/' + (Todos.todoFilter || '') + '"]')
                    .addClass('selected');
            } else {
                this.$main.hide();
                this.$footer.hide();
            }

            this.allCheckbox.checked = !remaining;
        },
        addOne: function (todo) {
            var view = new TodoView({
                model: todo
            });
            $('#todo-list').append(view.render().el);
        },
        addAll: function () {
            this.$('#todo-list').html('');
            Todos.todos.each(this.addOne, this);
        },
        filterOne: function (todo) {
            todo.trigger('visible');
        },
        filterAll: function () {
            Todos.todos.each(this.filterOne, this);
        },
        newAttributes: function () {
            return {
                title: this.$input.val().trim(),
                order: Todos.todos.nextOrder(),
                completed: false
            };
        },
        createOnEnter: function (event) {
            if (event.which !== ENTER_KEY || !this.$input.val().trim()) {
                return;
            }
            Todos.todos.create(this.newAttributes());
            this.$input.val('');
        },
        clearCompleted: function () {
            _.invoke(Todos.todos.completed(), 'destroy');
            return false;
        },
        toggleAllComplete: function () {
            var completed = this.allCheckbox.checked;

            Todos.todos.each(function (todo) {
                todo.save({
                    'completed': completed
                });
            });
        }
    });
});
