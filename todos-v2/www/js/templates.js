define(function (require) {
    'use strict';
    return {
        header: require('tpl!tpls/header.tpl'),
        footer: require('tpl!tpls/footer.tpl'),
        todoItem: require('tpl!tpls/todo-item.tpl'),
        todoList: require('tpl!tpls/todo-list.tpl')
    };
});
