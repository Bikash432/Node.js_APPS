var events=require('events');

var myemmitter=new events.eventEmmitter();

myemmitter.on('someEvent',function(msg){
    console.log(msg);
});

myemmitter.emit('someEvent','the event was triggred');