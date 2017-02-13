'use strict';

require('jsrender');

var tmpl = require('../../templates/chat.html');

function ChatView(widget) {
    this.widget = widget;
    this.viewport = widget.viewport;
    this.init();
}

ChatView.prototype.init = function () {

};

ChatView.prototype.render = function () {
    var template = $.templates(tmpl);
    this.viewport.html(template());
};

module.exports = ChatView;
