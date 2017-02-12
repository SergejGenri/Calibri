var config = {
    // QuickBlox SDK settings
    QB: {
        app: {
            id: 28783,
            authKey: 'b5bVGCHHv6rcAmD',
            authSecret: 'ySwEpardeE7ZXHB'
        },
        config: {
            chatProtocol: {
                active: 2
            },
            streamManagement: {
                enable: true
            },
            debug: {
                mode: 1,
                file: null
            }
        }
    },

    TEMPLATES: {
        login: require('../templates/login.html'),
        loading: require('../templates/loading.html'),
        chat: require('../templates/chat.html')
    }
};

module.exports = config;