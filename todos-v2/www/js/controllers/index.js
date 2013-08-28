define(function (require) {
    'use strict';
    var Backbone = require('backbone');

    return {
        setFilter: function (params) {
            params = params || '';
            Backbone.Events.trigger('todoList:filter', params.trim());
        }
    };
});
