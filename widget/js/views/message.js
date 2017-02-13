'use strict';

require('jsrender');

var tmpl = require('../../templates/message.html');

function Message(options) {
    this.options = options;
    this.options.time = new Date().toLocaleTimeString();
}

Message.prototype.render = function () {
    var template = $.templates(tmpl);
    return template(this.options);
};

module.exports = Message;
