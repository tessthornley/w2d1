function getHTML (options, callback) {

    var https = require('https');

    var dataResults = [];

    var requestOptions = {  
    }

    var keys = Object.keys(options)
    requestOptions.host = keys.toString();
    requestOptions.path = options[keys]

    https.get(requestOptions, function (response){
        
        response.setEncoding('utf8');
    
        response.on('data', function(data){
            dataResults.push(data);
            printHTML(dataResults);
        });
    });
  }
  
  function printHTML (html) {
    console.log(html);
  }
  
getHTML({'sytantris.github.io': '/http-examples/step3.html'
}, printHTML);