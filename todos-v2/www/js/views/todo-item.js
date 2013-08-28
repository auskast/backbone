define(function (require) {
    'use strict';
    var Marionette = require('marionette');
    var Templates = require('templates');

    return Marionette.CompositeView.extend({
        tagName: 'li',
        template: Templates.todoItem,
        ui: {
            edit: '.edit'
        },
        events: {
            'click .destroy': 'destroy',
            'dblclick label': ' onEditClick',
            'keypress .edit': 'onEditKeypress',
            'click .toggle': 'toggle'
        },
        initialize: function () {
            this.listenTo(this.model, 'change', this.render, this);
        },
        onRender: function () {
            this.$el.removeClass('active completed');
            if (this.model.get('completed')) {
                this.$el.addClass('completed');
            } else {
                this.$el.addClass('active');
            }
        },
        destroy: function () {
            this.model.destroy();
        },
        toggle: function () {
            this.model.toggle().save();
        },
        onEditClick: function () {
            console.log(this.$el);
            console.log(this.ui.edit);
            this.$el.addClass('editing');
            this.ui.edit.focus();
        },
        onEditKeypress: function (event) {
            var ENTER_KEY = 13;
            var todoText = this.ui.edit.val().trim();

            if (event.which === ENTER_KEY && todoText) {
                this.model.set('title', todoText).save();
                this.$el.removeClass('editing');
            }
        }
    });
});
