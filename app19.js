var http=require('http');
var server=http.createServer(function(req,resp){
    console.log('request was made ' + req.url);
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end('Hello World');
});


server.listen(3000,'127.0.0.1');

console.log('server listening on 3000');