//Repo link: https://github.com/ProgrammingHero1/js-problems-part1.git
//Task link: https://github.com/ProgrammingHero1/js-problems-part1-practice-tasks.git


// 22-1 JS Concepts recap and var, let, and const
//22-2 Unit Convert Inch to Feet, miles to kilometre

//Conversion:
//inch to feet convert:

// function inchToFeet(inch) {
//     let feet = inch / 12
//     return feet
// }

// let height = inchToFeet(67).toFixed(2)

// console.log('The height in feet  is: ', height);



// function inchToFeetSeparate(inch) {
//     let feet = parseInt(inch / 12);
//     let inc = inch % 12;

//     let result = `The height is: ${feet} feet ${inc} inches`;

//     return result;
// }

// console.log(inchToFeetSeparate(67));



//22-3 Check whether a year is a Leap Year or not


// function checkLeapYear(year) {

//     return (year % 4 === 0 && year % 100 !== 0 || year % 400 == 0)
// }

// console.log(checkLeapYear(2052));



//22-4 Calculate the average of the odd numbers in an array

//Odd avg:

// function oddAvg(numbers) {
// Create an array to store odd numbers
// let newArr = [];

// Filter odd numbers from the input array
// for (let num of numbers) {
//     if (num % 2 === 1) {
//         newArr.push(num);
//     }
// }

// If no odd numbers are found, return 0 or a message to handle division by zero
// if (newArr.length === 0) {
//     return 0; // Or any other appropriate value
// }

// Calculate the sum of odd numbers
// let sum = 0;
// for (let a of newArr) {
//     sum += a;
// }

// Calculate the average
//     let avg = sum / newArr.length;

//     return avg;
// }

// Test the function
// let result = oddAvg([1, 2, 3, 4, 5]);
// console.log(result);



//22-5 Remove duplicate items from an array


// let name = ['abu', 'bakkar', 'siddique', 'abu', 'riki', 'ahmed', 'riki']

// let number = [1, 2, 3, 4, 4, 5, 5]

// function noDuplicate(array) {

//     let unique = []

// for (let arr of array) {
//     if (unique.includes(arr) === false) {
//             unique.push(arr)
//         }
//     }

//     return unique
// }

// console.log(noDuplicate(name));
// console.log(noDuplicate(number));


//22-6 Math, abs, round, ceil, floor, and random number

let min = Math.min(10, 23, 44, 55, 1)
console.log(min);

let max = Math.max(10, 23, 44, 55, 1)
console.log(max);


console.log((Math.PI).toFixed(2));

console.log(Math.abs(10 - 5));    //5
console.log(Math.abs(5 - 10));    //5


console.log(Math.round(5.2));   //5
console.log(Math.round(5.55));  //6
console.log(Math.round(5.8));   //6


console.log(Math.floor(2.44));  //2
console.log(Math.floor(2.88));  //2
console.log(Math.floor(2.99));  //2

console.log(Math.ceil(2.44));  //3
console.log(Math.ceil(2.88));  //3
console.log(Math.ceil(2.99));  //3


console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.round(Math.random() * 10));



