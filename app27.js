var express=require('express');
var app=express();

var bodyparser=require('body-parser');
var urlencodedParser=bodyparser.urlencoded({extended:false});

app.set('view engine','ejs');
//app.use('/assets',function(req,resp,next){
    //console.log(req.url);
    //next();
//});//static middleware for express
//it has the ability to serve static and dynamic content

app.use('/assets',express.static('assets'));

app.get('/',function(req,resp){resp.render('index');});



app.get('/contact',function(req,resp){
    console.log(req.query);
//navigate to different page but first store the information and rewrite 
//example- storing to the cart
//storing temporary information

    resp.render('contact',{qs:req.query}); 
 });

app.post('/contact',urlencodedParser,function(req,resp){
    console.log(req.body);
    resp.render('contact',{qs:req.body});
})


//render function is responsible to make it dynamic
app.get('/profile/:name',function(req,resp)
{
    var data={name:'Bikash Thapa Magar',age:24,job:'Dev',hobbies:['reading','writing','speaking']};
    resp.render('profile',{person: req.params.name,'data':data});

});



app.get('/index/:name',function(req,resp)
{
    var data={name:'Bikash Thapa Magar',age:24,job:'Dev',hobbies:['reading','writing','speaking']};
    resp.render('profile',{person: req.params.name,'data':data});

});

app.get('/payslip/:name',function(req,resp)
{
    resp.send('You requested the profile for name: '+req.params.name);

});


app.listen(3000);