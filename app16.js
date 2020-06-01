var fs=require('fs');

fs.mkdir('Data',function(){
  fs.writeFile('./Data/finance.txt','Hello Bikash Thapa Magar',function(){
    fs.readFile('./Data/finance.txt','utf8',function(error,data){
      fs.mkdir('Banking',function(){});
      fs.writeFile('./Banking/Account.txt',data,function(){
          fs.unlink('./Data/finance.txt',function(){
              fs.rmdir('Data');
          });

      });
    });
  });
});