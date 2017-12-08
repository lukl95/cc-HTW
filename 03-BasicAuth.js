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

    var headers = request.headers;
    var authorization = headers['authorization'];
   
    var username = null;
    var password = null;

    if (authorization)
    {
        var tmp = authorization.split(' ');     // Split on a space, the original auth looks like  "Basic Y2hhcmxlczoxMjM0NQ==" and we need the 2nd part
        var buf = new Buffer(tmp[1], 'base64'); // create a buffer and tell it the data coming in is base64
        var plain_auth = buf.toString();        // read it back out as a string At this point plain_auth = "username:password"

        var creds = plain_auth.split(':');      // split on a ':'
        username = creds[0];
        password = creds[1];
    }

   if(request.method=='POST') 
   {
        var body = [];
        request.on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            body = Buffer.concat(body).toString();
                // at this point, `body` has the entire request body stored in it as a string
                var responseMessage = 'Your provided e-mail address is: '+body;
                
                if (authorization) 
                    responseMessage += '\nYour provided Authorization header is: '+authorization;
                
                if (username)
                    responseMessage += '\nYour provided username is: '+username;

                if (password)
                    responseMessage += '\nYour provided password is: '+password;
                
                responseMessage += '\n\nRequest Id: '+requestId;
                response.end(responseMessage);
       
            });       
    }
    else
   {       
        response.end('Wow, this was an awesome '+request.method+' request. But you were requestesd to make a POST request.!\n\nRequest Id: '+requestId); 
   }
   
}).listen(port);

// Console will print the message
console.log("Server running at http://localhost:%d", port);
