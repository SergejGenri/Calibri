'use strict';

require('jsrender');

var tmpl = require('../../templates/login.html');

function LoginView(widget) {
    this.widget = widget;
    this.viewport = widget.viewport;
    this.init();
}

LoginView.prototype.init = function () {
    this.viewport.on('submit', '.js-login-form', this.connect.bind(this));
};

LoginView.prototype.render = function () {
    var template = $.templates(tmpl);
    this.viewport.html(template());
};

LoginView.prototype.connect = function (event) {
    var $elem = this.viewport.find('.js-nickname'),
        name = $elem.val().trim();

    event.preventDefault();

    if (name) {
        console.log(name);
        this.viewport.trigger('changeView', ['chat']);
        // QBApp = this.options.quickblox;
        // this.service = QB;
        // this.service.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, config.QB.config);
        // this.service.createSession(function(err, result) {
        //     if (err) {
        //         console.log(err.detail);
        //     } else {
        //         console.log(result);
        //     }
        // });
    }
};

module.exports = LoginView;
