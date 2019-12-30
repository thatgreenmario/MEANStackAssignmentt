//import events module
var events=require('events');
var eventemitter=new events.EventEmitter();
var handler = require('./second')


/*
//blockaccount function
var blockAccount=function(){
    console.log("Your account has been blocked for two days..")
}

//payincometax function
var payIncomeTax=function(){
    console.log("19% income tax has been deducted from your saving account");
}
*/

var balance = 1000;
//console.log(balance);
var account = function()
{
    //monitor function and event emitter
    var monitor=function(){
    if(balance<5000){
     eventemitter.emit('underBalance');
    }else{
        eventemitter.emit('overBalance');
    }
    }

    //deposit function
    var deposit=function(amount){
        balance+=amount;
        console.log("Amount deposited");
        monitor();
    }

    //withdraw function
    var withdraw=function(amount){
        balance-=amount;
        console.log("Amount withdrawn");
        monitor();
    }

    //dynamic linking with callback functions
    var eventfire=function(){
        eventemitter.on("underBalance",handler.blockAccount);
        eventemitter.on("overBalance",handler.payIncomeTax);
    }
    //need to return so that function can be run outside
    return{
        deposit:deposit,
        withdraw:withdraw,
        eventfire:eventfire
    }

}

var abc = new account();
//need to run first so that events can be registered
abc.eventfire();
//abc.deposit(20000000);
abc.withdraw(20000000);
