define(function (require) {
    'use strict';
    var Marionette = require('marionette');

    return Marionette.AppRouter.extend({
        appRoutes: {
            '*filter': 'setFilter'
        }
    });
});