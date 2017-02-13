'use strict';

require('jsrender');

var config = require('../config'),
    Message = require('./message'),
    tmpl = require('../../templates/chat.html');

function ChatView(widget) {
    this.widget = widget;
    this.viewport = widget.viewport;
    this.service = widget.service;
    this.init();
}

ChatView.prototype.init = function () {
    this.viewport.on('submit', '.js-send', this.sendMessage.bind(this));
    this.service.chat.onMessageListener = this._onMessage.bind(this);
};

ChatView.prototype.render = function () {
    var template = $.templates(tmpl);
    this.viewport.html(template());

    this.dialog = this.viewport.find('.js-dialog');
    this.showDialog();
};

ChatView.prototype.showDialog = function () {
    var msg = new Message({
        text: this.widget.options.startMessage,
        isAdmin: true
    });
    this.updateDialog(msg);
};

ChatView.prototype.updateDialog = function (msg) {
    this.dialog.append(msg.render());
    this.dialog.scrollTop(this.dialog.height());
};

ChatView.prototype.sendMessage = function (event) {
    var $text = this.viewport.find('.js-message'),
        message = $text.val().trim();

    event.preventDefault();

    if (message) {
        this._sendQBMessage(message);
        $text.val('');
    }
};

/* START: QuickBlox 1-1 chat logic
 -------------------------------------------------------------------- */
ChatView.prototype._sendQBMessage = function (text) {
    var adminId = this.widget.options.admin.id,
        msg = {
            type: 'chat',
            body: text,
            extension: {
                save_to_history: 1,
                dialog_id: this.widget.dialogId
            }
        };

    this.service.chat.send(adminId, msg);
    this._onMessage(this.widget.currentUser.userId, msg);
};

ChatView.prototype._onMessage = function (userId, message) {
    var msg = new Message({
        text: message.body,
        isAdmin: userId !== this.widget.currentUser.userId
    });
    this.updateDialog(msg);
};
/* END: QuickBlox 1-1 chat logic
 -------------------------------------------------------------------- */

module.exports = ChatView;
