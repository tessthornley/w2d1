function getHTML (options, callback) {

    var https = require('https');

    var dataResults = [];

    var requestOptions = {
        host: options['host'],
        path: options['path']  
    };

    https.get(requestOptions, function (response){
        
        response.setEncoding('utf8');
    
        response.on('data', function(data){
            dataResults.push(data);
            callback(dataResults);
        });
    });
  }
  
  function printHTML (html) {
    console.log(html);
  }

  
getHTML({host: 'sytantris.github.io': path: '/http-examples/step3.html'
}, printHTML);