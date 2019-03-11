var getHTML = require('./http-functions');

getHTML({host: 'sytantris.github.io', path: '/http-examples/step3.html'
}, function (html) {
    console.log(html);
  });