define(function () {
    'use strict';
    return Backbone.Router.extend({
        routes: {
            '*filter': 'setFilter'
        },
        setFilter: function (param) {
            if (param) {
                param = param.trim();
            }
            Todos.todoFilter = param || '';
            Todos.todos.trigger('filter');
        }
    });
});
