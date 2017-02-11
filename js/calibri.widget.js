define([
    'jquery',
    'jquery-ui'
], function ($) {

    $.widget('custom.calibri', {
        _create: function () {
            this._build();
        },

        _build: function () {
            var self = this;

            self.element.resizable({
                ghost: true,
                animate: true,
                maxHeight: 560,
                maxWidth: 640,
                minHeight: 370,
                minWidth: 270
            });

            self.element.find('.calibri-header').on('mousedown', function () {
                self.element.draggable({
                    containment: 'document',
                    handle: '.calibri-header'
                });
            });

            self.element.find('.close-reg-chat').on('mousedown', function () {
                self.element.addClass('hiden');
            });

            // $('.close-talk-chat').on('mousedown', function () {
            //     $('.talk-chat').addClass('hiden');
            // });
        }
    });

});
