define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    var TodoModel = require('models/todo');
    require('backbone.localStorage');

    function isCompleted(todo) {
        return todo.get('completed');
    }

    return Backbone.Collection.extend({
        model: TodoModel,
        localStorage: new Backbone.LocalStorage('todos-backbone'),
        getCompleted: function () {
            return this.filter(isCompleted);
        },
        getActive: function () {
            return this.reject(isCompleted);
        },
        comparator: function (todo) {
            return todo.get('created');
        }
    });
});
