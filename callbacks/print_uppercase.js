var getHTML = require('./http-functions');

function printUpperCase (html) {
    html.map(function(x) {
        console.log(x.toUpperCase());
    });
}   

getHTML({host: 'sytantris.github.io', path: '/http-examples/step6/uppercase.html'}, printUpperCase);