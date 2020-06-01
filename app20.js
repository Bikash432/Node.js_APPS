var http=require('http');
var fs=require('fs');

//readStream does 2 things -1.read files and 2. divides it into chunck3.Eventemitter
var myReadStream=fs.createReadStream(__dirname+'/readme2.txt','utf8');

myReadStream.on('data',function(chunk){
    console.log('new chunk received');
    console.log(chunk);
});