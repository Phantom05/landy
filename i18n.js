var i18n = require('i18n');

i18n.configure({
    locales: ['en','ko','jp','zh'],
    // fallbacks: { nl: 'kr' },
    defaultLocale: 'en',
    cookie: 'locale',
    autoReload: true,
    updateFiles: false, 
    // queryParameter: 'lang', // query string 으로 lang 이 오면, 해당 값의 언어를 불러온다.
    objectNotation: true, 
    register: global,
    directory: __dirname + '/locales'

});


module.exports = function(req, res, next) {
    i18n.init(req, res);
    return next();
};
