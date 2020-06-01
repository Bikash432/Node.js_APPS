var fs=require('fs');


var readme=fs.readFileSync("readme.txt","utf8")
{
    console.log(readme);
}