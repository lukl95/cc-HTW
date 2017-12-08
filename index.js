var http = require('http');
var crypto = require("crypto");
var port = process.env.PORT || 8081;

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
      
   var requestId = crypto.randomBytes(16).toString("hex");   

   if(request.method=='POST') {
       // Send the response body as "Hello Cloud"
        response.end('Wow, this was an awesome POST request!\n\nRequest Id: '+requestId); 
   }
   else
   {
        // Send the response body as "Hello Cloud"
        response.end('Hello Cloud\n\nRequest Id: '+requestId); 
   } 
}).listen(port);

// Console will print the message
console.log("Server running at http://localhost:%d", port);
