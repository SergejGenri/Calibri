'use strict';

require('jsrender');

var config = require('../config'),
    Message = require('./message'),
    tmpl = require('../../templates/chat.html');

function ChatView(widget) {
    this.widget = widget;
    this.viewport = widget.viewport;
    this.service = widget.service;
    this.currentUser = widget.currentUser;
    this.init();
}

ChatView.prototype.init = function () {
    this.viewport.on('submit', '.js-send', this.submit.bind(this));
    this.service.chat.onMessageListener = this.onMessage;
};

ChatView.prototype.render = function () {
    var template = $.templates(tmpl);
    this.viewport.html(template());
    this.startDialog();
};

ChatView.prototype.startDialog = function () {
    this.dialog = this.viewport.find('.js-dialog');
    this.addMsgToDialog(new Message({
        text: this.widget.options.startMessage,
        isAdmin: true
    }));
};

ChatView.prototype.addMsgToDialog = function (msg) {
    this.dialog.append(msg.render());
};

ChatView.prototype.submit = function (event) {
    var $text = this.viewport.find('.js-message'),
        message = $text.val().trim();

    event.preventDefault();

    if (message) {
        this.sendMessage(message);
    }
};

ChatView.prototype.sendMessage = function (message) {
    var opponentId = this.widget.options.admin.id,
        msg = {
            type: 'chat',
            body: message
        };

    this.service.chat.send(opponentId, msg);
    this.onMessage(this.currentUser.userId, msg);
};

ChatView.prototype.onMessage = function (userId, msg) {
    console.log(userId, msg);
    this.addMsgToDialog(new Message({
        text: msg.body
    }));
};

module.exports = ChatView;
