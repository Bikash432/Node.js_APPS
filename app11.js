var fs=require('fs');

var readme=fs.readFileSync('readme.txt','utf8');

fs.writeFileSync('bikash.txt',readme);
console.log('A new txt file has been created');