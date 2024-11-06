var x = 10;
// console.log(typeof x);


// isNaN function:
// It's a function in JavaScript that checks if a value is Not-a-Number (NaN).
// It tests the value to determine:
// 1. Is it a number?
// 2. Can the value be converted into a number?

// If the value is not a number or cannot be converted into a number, it returns: true
// Otherwise, it returns: false

var i = 101.111
console.log(isNaN(i));
//False, Cause its a number.

var j = "101.111"
console.log(isNaN(j));
//False. Cause it can possible to convert into number.

var k = "1212jjj"
console.log(isNaN(k));
//True.
//Cause its not a number/ Not possible to convert into number.



