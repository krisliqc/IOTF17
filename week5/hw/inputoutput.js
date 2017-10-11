var GPIO = require('onoff').Gpio,
led1 = new GPIO(17, 'out'),
led2 = new GPIO(18, 'out'),
//make a second led output
button1 = new GPIO(4, 'in', 'both');
button2 = new GPIO(27, 'in', 'both');

var led1state = 0;
var led2state = 0;

var prompt = require('prompt');
var writeFile = require('write');
prompt.start();

// var gameState = 0;

console.log("");
console.log("Welcome to the race!");
console.log("please enter the name of both players");
console.log("");

prompt.get(['player1', 'player2'], function (err, result) {
	player1 = result.player1;
	player2 = result.player2;
	// gameState = 1;

	console.log("");
	console.log("Are you ready, "+ player1 + " and " + player2 + " ?");
	console.log("The person who fist completes 10 hits wins!");
	console.log("");

});

function light1(err, state) {
  // check the state of the button
  // 1 == pressed, 0 == not pressed
	if(state == 1) {
		led1state += 1;
		console.log("button1 has been pressed " + led1state + " times");
  	} else {
  		// led1state = 0;
  	}


  if(led1state >= 10 && led2state < 10){
    led1.writeSync(1);
    console.log("");
    console.log(player1 + " won!");
    console.log("");
      writeFile('winner.txt', player1, function(err) {
      if (err) console.log(err);
      });
  }
}

function light2(err, state) {
  // check the state of the button
  // 1 == pressed, 0 == not pressed
	if(state == 1) {
    	led2state += 1;
    	console.log("button2 has been pressed " + led2state + " times");
  	} else {
    	// led2state = 0;
  	}


  if(led2state >= 10 && led1state < 10){
    led2.writeSync(1);
    console.log("");
    console.log(player2 + " won!");
    console.log("");
      writeFile('winner.txt', player2, function(err) {
      if (err) console.log(err);
      });
  }
}

button1.watch(light1);
button2.watch(light2);


// var button1num = 0;
// var button2num = 0;

// function light(err, state, name) {
  
// 	if(name == 1){
// 	  if(state == 1) {
// 	    button1num += 1;
// 	  } 
// 	  console.log("button1 has been pressed " + button1num + " times");
// 	} else if (name == 2){
// 		if(state == 1) {
// 	    button2num += 1;
// 	  } 
// 	  console.log("button2 has been pressed " + button2num + " times");
// 	}

// }

// setInterval(function(){ 
//   // button.watch(light);
//   button.watch(start);
// }, 100);
