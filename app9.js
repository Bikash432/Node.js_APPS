var events=require('events');
var utils=require('util');

var Person=function(name){
this.name=name;
};  


//implementing inheritance
//person being child class has the ability to inherit the poperty
//of events
utils.inherits(Person,events.EventEmitter);
//creating the object
var james=new Person('james');
var bikash=new Person('bikash');
var alisha=new Person('alisha');

var people=[james,bikash,alisha];

people.forEach(function(person){
  person.on('speak',function(msg){
      console.log(person.name+' said '+msg);
  })
});


james.emit('speak','HelloBaby');
bikash.emit('speak','I love you ');
alisha.emit('speak','I love you too');