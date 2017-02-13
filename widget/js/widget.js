'use strict';

require('jsrender');

var config = require('./config'),
    LoginView = require('./views/login'),
    LoadingView = require('./views/loading'),
    ChatView = require('./views/chat'),
    baseTmpl = require('../templates/layout.html');

$.widget('custom.calibri', {
    options: {
        startMessage: config.startMessage,
        admin: config.admin,
        quickblox: {
            appId: config.QB.app.id,
            authKey: config.QB.app.authKey,
            authSecret: config.QB.app.authSecret
        }
    },

    _create: function () {
        this.currentUser = {};
        this.service = QB;

        this._serviceInit();
        this._build();
        this._bindEvents();

        this.viewport.trigger('changeView', ['login']);
    },

    _serviceInit: function () {
        var QBApp = this.options.quickblox;
        this.service.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, config.QB.config);
    },

    _build: function () {
        var template = $.templates(baseTmpl);

        this.element.addClass('calibri');
        this.element.html(template({
            title: this.options.admin.name
        }));

        this._addPlugins();
        this._createViews();
    },

    _addPlugins: function () {
        this.element.draggable({
            containment: 'document',
            handle: '.js-header'
        });
        this.element.resizable({
            ghost: true,
            animate: true,
            maxHeight: 560,
            maxWidth: 640,
            minHeight: 370,
            minWidth: 270
        });
    },

    _createViews: function () {
        this.viewport = this.element.find('.js-content');
        this.views = {
            login: new LoginView(this),
            loading: new LoadingView(this),
            chat: new ChatView(this)
        };
    },

    _bindEvents: function () {
        this.element.on('click', '.js-close', this.destroy.bind(this));
        this.viewport.on('changeView', this._render.bind(this));
    },

    _render: function (event, viewName) {
        this.views[viewName].render();
    },

    _destroy: function () {
        this.service.chat.disconnect();
        this.element.draggable('destroy');
        this.element.resizable('destroy');
        this.element.removeAttr('class style');
        this.element.empty();
        this.element.off();
    }
});
