var getHTML = require('./http-functions');

function printReverse (html) {
    console.log(html.toString().split('').reverse().join(''));
}   

getHTML({host: 'sytantris.github.io', path: '/http-examples/step6/reverse.html'}, printReverse);