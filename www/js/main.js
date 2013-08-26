require.config({
    baseUrl: 'js',
    paths: {
        text: 'lib/require-text',
        models: 'models',
        collections: 'collections',
        views: 'views',
        tpls: 'tpls'
    }
});

var Todos = {};
var ENTER_KEY = 13;

require([
    'collections/todos',
    'views/app',
    'router'
], function (TodosCollection, AppView, Router) {
    'use strict';
    Todos.todos = new TodosCollection();
    Todos.todoFilter = null;

    new AppView();
    new Router();
    Backbone.history.start();
});
