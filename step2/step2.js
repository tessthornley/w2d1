function getAndPrintHTML () {
    var https = require('https'); 

    var dataResults = [];

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    https.get(requestOptions, function (response){
        
        response.setEncoding('utf8');

        response.on('data', function(data){
            dataResults.push(data);
            console.log(dataResults);
        });
    }); 
};

getAndPrintHTML();