require('jsrender');

var config = require('./config');

$.widget('custom.calibri', {
    options: {
        quickblox: {
            appId: config.QB.app.id,
            authKey: config.QB.app.authKey,
            authSecret: config.QB.app.authSecret
        }
    },

    _create: function () {
        var html = $.templates(config.TEMPLATES.login)(),
            QBApp = this.options.quickblox;

        this.element.addClass('calibri');
        this.element.html(html);
        this._build();

        this.service = QB;
        this.service.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, config.QB.config);
        this.service.createSession(function(err, result) {
            if (err) {
                console.log(err.detail);
            } else {
                console.log(result);
            }
        });
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

        // self.element.find('.calibri-header').on('mousedown', function () {
            self.element.draggable({
                containment: 'document',
                handle: '.calibri-header'
            });
        // });

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
        this.element.removeAttr('class style');
        this.element.empty();
    }
});
