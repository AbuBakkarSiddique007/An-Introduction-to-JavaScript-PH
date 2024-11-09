//Repo link: https://github.com/ProgrammingHero1/js-array.git
//task link: https://github.com/ProgrammingHero1/js-array-tasks.git



// 18_5-1 Store more than one value in a variable using Array

// const num1 = 12; 
// const num2 = 22; 
// const num3 = 442; 
// const num4 = 442; 

// const numbers = 1222442412412;
// (), {}, []
let numbers = [12, 22, 54, 65];
let friends = ['Abul', 'babul', 'cabul', 'dabul', 'bulbul'];
let passed = [true, false, true, false];
let mixedArray = [12, 'Alahbad', true, 45.566];

console.log(mixedArray);  //[ 12, 'Alahbad', true, 45.566 ]

console.log(mixedArray.length);     //4



// 18_5-2 Visualize the concpet of an array
// 18_5-3 Array length, index, Get and set by index

//length:
const number = [1, 5, 66, 11, 45, 65, 65, 88, 11, 45, 65, 65, 88, 15];
console.log(number.length); //14


//index:
let values = [1, 2, 3, 4, 5]
console.log(values);     //[ 1, 2, 3, 4, 5 ]
console.log(values.length); //5

console.log(values[0]); //1
console.log(values[1]); //2
console.log(values[4]); //5

values[4] = 999
console.log(values[4]); //999



// 18_5-4 Add and remove elements from arrays using push, pop, shift and unshift


//push: insert value into the array in last
let numbers_1 = [12, 87, 98, 45];

console.log(numbers_1);
//[ 12, 87, 98, 45 ]

numbers_1.push(44);
numbers_1.push(65);
numbers_1.push(98, 11, 9);

console.log(numbers_1);
// [
//     12, 87, 98, 45, 44,
//     65, 98, 11, 9
// ]


//pop: remove value in the array last.
const friend = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];


console.log(friend)

const out1 = friend.pop();
console.log(friend);
const out2 = friend.pop();
console.log(friend);
console.log(out1, out2);

//shipt and un-shipt
//shift: remove element in the array fast
//un-shipt : add element in the array in fast


friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
console.log(friends);
friends.shift();
console.log(friends);

friends.unshift('ghumailam')
console.log(friends)


// 18_5-5 All about basic array methods, isArray

//includes: is it exist in the array?
friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

console.log(friends.includes('gelam'))
console.log(friends.includes('khailam'))

if (friends.includes('salam')) {
    console.log('party')
}
else {
    console.log('no food. we are fasting')
}

//indexof() : khono ekta element er index janar jonno
friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

console.log(friends.indexOf('gelam'));

console.log(friends.indexOf('tomato')) //-1: cause its not exist in the array


//isArray:
// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

// const nums = [];

// const food = 'ros o gol l a';

// const age = 15;

// console.log(Array.isArray(friends))
// console.log(Array.isArray(nums))
// console.log(Array.isArray(food))
// console.log(Array.isArray(age))