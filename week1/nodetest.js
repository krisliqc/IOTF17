var myVariable = [1, 'Bob', 'Steve', 10];
// console.log(myVariable[1]);
// console.log(myVariable.length);

//in console, use "touch" to create file
//use node to access node

//use sudo node filename to run js file
//use sudo nano to open file in editor

var car = {type:"fiat", model:500, color:"white"};
// console.log(car.color);

//one key employee, inside employee is an array
var list = {"employees":[
	{"firstName":"John", "lastname":"Doe"},
	{"firstName":"Anna", "lastname":"Smith"},
	{"firstName":"Peter", "lastname":"Jones"},
]
};
// console.log(list.employees[0].lastname);

//switch case ---------------------------------------------------
//when using switch cases, always put a break after each case
//only for ==
var key = "fruit";
switch (key){
	case "cherry":
		console.log("cherry");
		break;
	case "apple":
		break;
		console.log("apple");
	case "cat":
		console.log("cat");
		break;
	default:
		// console.log("not in system");
}

//function -------------------------------------------------------
function multiply(num1, num2){
	var result = num1 * num2;
	// return result;
	//when you say "return" it exits the function
	console.log(result);
}
// multiply(5,20);

var callback = function (){
	console.log("done!");
}
setInterval(callback, 3000); //"callback" function embedded into a native js function "setInterval"

//^^the same as below
setInterval(function (){
	console.log("done!");
}, 3000);
//control + C stops the terminal from running


