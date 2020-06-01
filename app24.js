var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,resp){
    console.log('request was made'+req.url);
    resp.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname+'/index.html','utf8');
    myReadStream.pipe(resp);

});

server.listen(3000,'127.0.0.1');
console.log('server listening on 3000');
