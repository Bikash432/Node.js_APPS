var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,resp){
   console.log('request was made'+req.url);

   if(req.url==='/home'|| req.url==='/'){
   //resp.writeHead(200,{'Content-Type':'application/json'});
   resp.writeHead(200,{'Content-Type':'text/html'});
   fs.createReadStream(__dirname+'/index.html').pipe(resp);

   }
   else if(req.url==='/contact'){
       resp.writeHead(200,{'Content-Type':'text/html'});
       fs.createReadStream(__dirname+'/contact.html').pipe(resp);
   }
   else if(req.url==='/address'){
    resp.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/address.html').pipe(resp);
   }
else if(req.url==='/api/data'){
    var object=[{name:'amit',age:25},{name:'Bikash',age:33}];
  resp.writeHead(200,{'Content-Type':'application/json'});
  resp.end(JSON.stringify(object));
}
else{
    resp.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/404.html').pipe(resp);
}
    

});

server.listen(3000,'127.0.0.1');
console.log('program on routing');
