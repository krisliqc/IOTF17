var name = "andrew";
var _country = "scotland";
//escape clause
var my_text = "This quote this that: \"Hi. My name is Kris. \"";

var age = 10;
var my_boolean = false;
// console.log(my_text);
// alert(name); 

if(typeof(age) == "string"){
	age = "10";
	console.log(age);
} else {
	console.log("not a string");
}

if(age == 10 && name == "andrew"){
	console.log("10 + andrew");
}

var my_array = ["cat", "dog", "ball", 1, 2, true]; //array can take anything

console.log(my_array[2]);
