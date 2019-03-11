var getHTML = require('./http-functions');

function printLowerCase (html) {
    html.map(function(x) {
        console.log(x.toLowerCase());
    });
}   

getHTML({host: 'sytantris.github.io', path: '/http-examples/step6/lowercase.html'}, printLowerCase);