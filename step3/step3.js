function getAndPrintHTML (options) {

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
        });
    
        response.on('end', function(){
            console.log(dataResults);
        });
    });
  }

 getAndPrintHTML({host: 'sytantris.github.io', path:'/http-examples/step3.html'
  });
  