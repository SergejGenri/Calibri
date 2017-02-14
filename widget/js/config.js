'use strict';

var config = {
    // QuickBlox SDK settings
    QB: {
        app: {
            id: 53089,
            authKey: 'Em7LB2Db24rxWE4',
            authSecret: '3JsGq29SUbgxvYb'
        },
        config: {
            chatProtocol: {
                active: 2
            },
            streamManagement: {
                enable: true
            },
            debug: {
                mode: 0,
                file: null
            }
        }
    },

    admin: {
        id: 23957181,
        name: 'DemoChatUser1'
    },

    defaultPass: '123123123',
    startMessage: 'Hello! How can I help you?'
};

module.exports = config;
