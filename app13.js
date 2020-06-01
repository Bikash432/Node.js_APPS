var fs=require('fs');
var readme=fs.readFile('readme.txt','utf8',function(error,data){
 fs.writeFile('bikash',data);
 console.log('Data Transfer completed');
});
console.log('Data transfer initiated');