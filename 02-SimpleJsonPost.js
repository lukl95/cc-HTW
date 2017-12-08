var http = require('http');
var url = require('url');
var crypto = require("crypto");
var port = process.env.PORT || 8081;

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
    var queryData = url.parse(request.url, true).query;
    var firstname =  queryData.fn;
    var lastname =  queryData.ln;
    var requestId = crypto.randomBytes(16).toString("hex");
    
   if(request.method=='POST') 
   {
        var body = [];
        request.on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            body = Buffer.concat(body).toString();
                // at this point, `body` has the entire request body stored in it as a string
                response.end('Hi '+firstname+' '+lastname+'. This was an awesome request with query arguments! This is your provided e-mail address: '+body+'\n\nRequest Id: '+requestId);
       
            });       
    }
    else
   {       
        response.end('Wow, this was an awesome '+request.method+' request. But you were asked to make a POST request!\n\nRequest Id: '+requestId); 
   }
   
}).listen(port);

// Console will print the message
console.log("Server running at http://localhost:%d", port);
