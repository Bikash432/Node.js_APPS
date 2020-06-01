var http=require('http');
var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/readme2.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/writeme5.txt');

myReadStream.pipe(myWriteStream);