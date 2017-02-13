'use strict';

require('jsrender');

var config = require('../config'),
    tmpl = require('../../templates/login.html');

function LoginView(widget) {
    this.widget = widget;
    this.viewport = widget.viewport;
    this.service = widget.service;
    this.currentUser = widget.currentUser;
    this.init();
}

LoginView.prototype.init = function () {
    this.viewport.on('submit', '.js-login-form', this.submit.bind(this));
};

LoginView.prototype.render = function () {
    var template = $.templates(tmpl);
    this.viewport.html(template());
};

LoginView.prototype.submit = function (event) {
    var $elem = this.viewport.find('.js-nickname'),
        nickname = $elem.val().trim();

    event.preventDefault();

    if (nickname) {
        this.viewport.trigger('changeView', ['loading']);
        this._createSession(nickname);
    }
};

/* START: QuickBlox connect to chat logic
-------------------------------------------------------------------- */
LoginView.prototype._createSession = function (nickname) {
    this.currentUser = {
        login: nickname,
        password: config.defaultPass
    };
    this.service.createSession(this.currentUser, this._onCreateSession.bind(this));
};

LoginView.prototype._onCreateSession = function (err, res) {
    if (err) {
        console.log(err);
        if (err.code === 401) {
            this.service.createSession(this._onCreateSession.bind(this));
        }
    } else {
        if (!res.user_id) {
            return this._createUser();
        }
        this._connect(res.user_id);
    }
};

LoginView.prototype._createUser = function () {
    this.service.users.create(this.currentUser, this._onCreateUser.bind(this));
};

LoginView.prototype._onCreateUser = function (err, res) {
    if (err) {
        console.log(err);
    } else {
        this._login();
    }
};

LoginView.prototype._login = function () {
    this.service.login(this.currentUser, this._onLogin.bind(this));
};

LoginView.prototype._onLogin = function (err, res) {
    if (err) {
        console.log(err);
    } else {
        this._connect(res.id);
    }
};

LoginView.prototype._connect = function (userId) {
    this.currentUser.userId = userId;
    this.service.chat.connect(this.currentUser, this._onConnect.bind(this));
};

LoginView.prototype._onConnect = function (err, res) {
    if (err) {
        console.log(err);
    } else {
        this.viewport.trigger('changeView', ['chat']);
    }
};
/* END: QuickBlox connect to chat logic
 -------------------------------------------------------------------- */

module.exports = LoginView;
