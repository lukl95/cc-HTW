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

   if(request.method=='GET') 
   {
       if (firstname && lastname)
       {
           response.end('Hello '+firstname+' '+lastname+'. This was an awesome request with query arguments!\n\nRequest Id: '+requestId);
       }
       else
        response.end('This was an awesome request, but unfortunately there are some missing query arguments.\n\nRequest Id: '+requestId); 
   } else
   {       
        response.end('Wow, this was an awesome '+request.method+' request. But you were asked to make a GET request with query arguments!\n\nRequest Id: '+requestId); 
   }
   
}).listen(port);

// Console will print the message
console.log("Server running at http://localhost:%d", port);
