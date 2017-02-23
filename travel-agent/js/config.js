var QBApp = {
    appId: 53089,
    authKey: 'Em7LB2Db24rxWE4',
    authSecret: '3JsGq29SUbgxvYb'
};

var config = {
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
};

var stickerpipe = null;

QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, config);

$('.j-version').text('v.' + QB.version + '.' + QB.buildNumber);
