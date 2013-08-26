define(function () {
    'use strict';
    Library.factory = function (Klass, options) {
        options = options || {};
        return new Klass(options);
    };
});
