var fs=require('fs');

fs.readFile('readme.txt','utf8',function(error,data){
    console.log(data);
});
console.log('proof of the call back function');