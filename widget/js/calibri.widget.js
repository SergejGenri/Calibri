require('jsrender');

var TEMPLATES = {
    login: require('./templates/login.html'),
    loading: require('./templates/loading.html'),
    chat: require('./templates/chat.html')
};

$.widget('custom.calibri', {
    options: {

    },

    _create: function () {
        var html = $.templates(TEMPLATES.login)();

        this.element.addClass('calibri reg-chat');
        this.element.html(html);
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
    },

    _destroy: function () {
        this.element.resizable("destroy");
        this.element.draggable("destroy");
        this.element.removeClass();
        this.element.empty();
    }
});

var elem = $('<div></div>').appendTo(document.body);

module.exports = elem;
