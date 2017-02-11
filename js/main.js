require.config({
    paths: {
        'jquery': 'https://code.jquery.com/jquery-3.1.1.min',
        'jquery-ui': 'https://code.jquery.com/ui/1.12.1/jquery-ui.min',
        'quickblox': 'https://cdnjs.cloudflare.com/ajax/libs/quickblox/2.5.0/quickblox.min',
        'jsrender': 'https://cdnjs.cloudflare.com/ajax/libs/jsrender/0.9.83/jsrender.min',

        // RequireJS text plugin
        'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',

        'calibri': 'calibri.widget'
    }
});

require([
    'jquery',
    'jsrender',
    'text!templates/login.html',
    'calibri'
], function ($, jsrender, tmpl) {
    var html = jsrender.templates(tmpl)();

    $(html)
        .appendTo(document.body)
        .calibri();
});
