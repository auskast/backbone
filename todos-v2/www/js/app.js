define(function (require) {
    'use strict';
    var Marionette = require('marionette');
    var TodosCollection = require('collections/todos');
    var HeaderView = require('views/header');
    var TodoListView = require('views/todo-list');
    var FooterView = require('views/footer');

    var app = new Marionette.Application();
    var todos = new TodosCollection();

    app.listenTo(todos, 'all', function () {
        if (todos.length === 0) {
            app.main.$el.hide();
            app.footer.$el.hide();
        } else {
            app.main.$el.show();
            app.footer.$el.show();
        }
    });

    app.addRegions({
        header: '#header',
        main: '#main',
        footer: '#footer'
    });

    app.addInitializer(function () {
        var viewOptions = {
            collection: todos
        };

        app.header.show(Todos.Factory(HeaderView, viewOptions));
        app.main.show(Todos.Factory(TodoListView, viewOptions));
        app.footer.show(Todos.Factory(FooterView, viewOptions));

        todos.fetch();
    });

    Backbone.Events.on('todoList:filter', function (filter) {
        filter = filter || 'all';
        $('#todoapp').attr('class', 'filter-' + filter);
    });

    Backbone.Events.on('todoList:clear:completed', function () {
        todos.getCompleted().forEach(function (todo) {
            todo.destroy();
        });
    });

    return app;
});
