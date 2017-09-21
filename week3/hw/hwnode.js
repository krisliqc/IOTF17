var prompt = require('prompt');
var writeFile = require('write');
prompt.start();

console.log(" ")
console.log("this program will help you convert between lbs and kg")
console.log("first enter the unit you wish to convert from")
console.log("then enter the value")
console.log(" ")

// Get two properties from the user

var resultNum;
var resultType;
var number;

prompt.get(['unit', 'value'], function (err, result) {

switch (result.unit){
	case "lbs":
		number = result.value / 2.2046;
		resultNum = number.toFixed(2);
		resultType = "kg";
		break;
	case "kg":
		number = result.value * 2.2046;
		resultNum = number.toFixed(2);
		resultType = "lbs";
		break;
	default:
		console.log("wrong input");
}

console.log(" ")
console.log('Here:\'s the conversion result');
console.log(result.value + result.unit + " is equal to " + resultNum + resultType);
console.log(" ")

var ConversionResultText = result.value.toString() + result.unit.toString() + " is equal to " + resultNum.toString() + resultType.toString();
// console.log(ConversionResultText)
writeFile('ConversionResult.txt', ConversionResultText, function(err) {
  if (err) console.log(err);
});
});


 
// promise 
// writeFile('foo.txt', 'This is content...')
//   .then(function() {
//     // do stuff 
//   });
