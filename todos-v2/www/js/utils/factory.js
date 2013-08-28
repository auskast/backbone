define(function () {
    'use strict';
    Todos.Factory = function (Klass, options) {
        return new Klass(options || {});
    };
});
