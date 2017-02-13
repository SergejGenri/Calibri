'use strict';

require('jsrender');

var tmpl = require('../../templates/loading.html');

function LoadingView(widget) {
    this.widget = widget;
    this.viewport = widget.viewport;
}

LoadingView.prototype.render = function () {
    var template = $.templates(tmpl);
    this.viewport.html(template());
};

module.exports = LoadingView;
