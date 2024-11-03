//Repo link: https://github.com/ProgrammingHero1/introduction-to-JavaScript.git
//task link: https://github.com/ProgrammingHero1/intro-to-js-tasks.git

// 17-1 Introduction to JavaScript

//Type "log" for console.log() suggestion.

//Run the program:
//In Terminal: node fileLocation

console.log(1212);
//1212

console.log("Hello World");
//Hello World



// 17-2 Maths Needed to start learning Programming Language

/**
 *************************************************************
 *              MATH NEEDED FOR PROGRAMMING
 * ************************************************************
 * 1. Number: +ve, -ve, 0 [ 50, -9, 0]
 * 2. integer: 2, 88, [odd, even]: 2, 4, 897 
 * 3. float: 5.6, 2.2
 * 4. Operation: +, -, *, /
 * 5. More operation: %, [ ]
 * 6. percentage: 5%, 50 taka er 10% koto?
 * 7. Sum: 14, 18, 16
 * 8. Avg: 14, 18, 16
 * 9. Max/Min: 14, 18, 16
 * 10. Series: 
 * 11. Area: Triangle 
 * 12.  
*/


// 17-3 What is a variable, five things you need to declare a variable
// Don't use var.

var age = 24;
var weight = 52;
var year = 2024;
var price = 200;

var money;
money = 500;

console.log("Age:", age);        //Age: 24
console.log('Weight: ', weight); //Weight:  52
console.log("Year: ", year);     //Year:  2024
console.log("Price: ", price);   //Price:  200

console.log("Money: ", money);   //Money:  500





// 17-4 Variable Animated Video
// 17-5 Variable data types, Numeric, String, Boolean


// Numeric:
var value = 100;
console.log("The value is : ", value);  //The value is :  100

//typeof => check the variable type 
console.log(typeof value);              //number

// String:
var name = "Abu Bakkar Siddique";
var address = "Chittagong";
var instituteName = 'IIUC';

console.log("My Name is : ", name); //My Name is :  Abu Bakkar Siddique
console.log(`My self ${name}`);     //My self Abu Bakkar Siddique

console.log(address);               //Chittagong
console.log(typeof address);        //string


// boolean:
// var isLogged = true;
// var pass = false;
// console.log(isLogged);              //true
// console.log(typeof isLogged);       //boolean


// 17-6 JavaScript Keyword, Variable name naming convention
// 1. no keyword in variable name
// var false = 45;
// var var = 50;

// 2. no space or gap in variable name
// var is happy = false;
// var ishappy = true;

// 3. no quote
// var "address" = "kochu khet";

// 4. can not start with a number. but number other than the first letter is allowed
var money = 45;
var money2 = 55;
// var 3money = 88;

// 5. name is case sensitive
// address
// Address
// ADDRESS
// addRess
// ADDress
//here all of are different.

// 6. how to write a long variable name

// var my current home address = "AndorKilkl Bandorbon";
var mycurrenthomeaddress = "AndorKilkl Bandorbon";
var my_current_home_address = "AndorKilkl Bandorbon"; // snake case
var myCurrentHomeAddress = "AndorKilkl Bandorbon"; // camel case
var MyCurrentHomeAddress = "AndorKilkl Bandorbon"; // Pascal case


// 17-7 Know the fundamentals of JS Numbers

var applePrice = 10;
var biscuitPrice = 20;

var totalPrice = applePrice + biscuitPrice;
console.log(totalPrice); // 30

var applePrice1 = 10;
var biscuitPrice1 = 0.2;
console.log(applePrice1 + biscuitPrice1); // 10.2 //number


var vale1 = 10;
var vale2 = '20'; //string

console.log(vale1 + vale2); //1020
console.log(typeof (vale1 + vale2));  //string
//The problem is arise when its perform the summation.


console.log('12' - 10); //2 //number



// To convert string to number: parseInt, parseFloat
var value3 = parseInt(vale1)
console.log(value3); //10
console.log(typeof value3); //number


// toFixed() => set precision after decimal point  
var first = 0.1
var second = 0.2
var third = first + second
console.log(third); //0.30000000000000004
console.log(third.toFixed(2)); //0.30


//const => fixed value , can not change after assign.
const a = 100;
console.log(a); //100

//a = 200;
// console.log(a); // error


//Infinity and negative infinity:

let  division1 = 100/0
console.log(division1); //Infinity

let division2 = -100/0
console.log(division2); //-Infinity


// 17-8 Introduction to arithmetic operators
// 17-9 (advanced) Mathematical operation shorthand


//shorthand:
//1: Addition
let priceOne = 15;

// priceOne = priceOne + 10
priceOne+=10
console.log(priceOne); //25

//2: Subtraction
let priceTwo = 20
// priceTwo = priceTwo - 10
priceTwo-=10
console.log(priceTwo); //10

//3: Multiplication
let priceThree = 20
// priceThree = priceThree * 2
priceThree *=2
console.log(priceThree); //40


let firstName = 'Abu'
let lastName = 'Bakkar'

console.log(firstName + lastName); //AbuBakkar


let b = '10'
console.log(typeof b); //string

let c = parseInt(b)
console.log(c); // 10 //number

let d = parseInt('abcd')
let e = 10
let f = d + e
console.log(f); //NaN
console.log(typeof f); //number








