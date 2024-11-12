//Repo Link: https://github.com/ProgrammingHero1/js-loop
//js Loop Task: https://github.com/ProgrammingHero1/js-loop-tasks.git



//19_1 What is a Loop, explore for loop


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(numbers);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9, 10
// ]

//for of loop:
// for (const num of numbers) {
// console.log(num);
// }

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10



// const fruits = ['orange', 'bananas', 'apple', 'watermelon'];

// for (const fruit of fruits) {
//     console.log(fruits);
//     console.log('I want to eat:3');
// }

// [ 'orange', 'bananas', 'apple', 'watermelon' ]
// I want to eat:3
// [ 'orange', 'bananas', 'apple', 'watermelon' ]
// I want to eat:3
// [ 'orange', 'bananas', 'apple', 'watermelon' ]
// I want to eat:3
// [ 'orange', 'bananas', 'apple', 'watermelon' ]
// I want to eat:3



// 19_2 Introduction to While Loop
// while loop:
// let num = 0
// while (num < 10) {
//     console.log("Hello World!", num);
//     num++;
// }


// 19_3 Problem solving with While Loop

//Range:

//Infinite Loop: (Don'n run this code :3)
//ctrl + c => for stop

// let value = 1;
// while (value < 10) {
//     console.log(`The value is: ${value}`);
// }


// while (value <= 10) {
//     console.log(`The value is: ${value}`);
//     value++;
// }


// let value2 = 50;
// while (value2 <= 100) {
//     console.log(`The value is: ${value2}`);
//     value2++;
// }


//Sum:
// let a = 1
// let sum = 0

// while (a <= 10) {
//     sum = sum + a
//     a++;
// }
// console.log(`The sum is : ${sum}`);
// The sum is : 55

//Even:
// a % 2 ===0  => even
//a % 2 !==1   =>even

// let b = 2;

// while (b <= 10) {
//     console.log(`The number is : ${b}`);
//     b = b + 2;
// }
// The number is : 2
// The number is : 4
// The number is : 6
// The number is : 8
// The number is : 10


//Another way : Even
// let c = 1
// while (c <= 10) {
//     if (c % 2 == 0) {
//         console.log(`The even number is: ${c}`);
//     }
//     c++;
// }

// The even number is: 2
// The even number is: 4
// The even number is: 6
// The even number is: 8
// The even number is: 10


// 19_4 Introduction to For Loop

//for loop:
// for(variable_declaration; loop_condition; incrementOrDecrement){
// code here
// statement_1;
// statement_2;
// }


// for(let valueOne = 1; valueOne <=10; valueOne++){
//     console.log(`Hello World! ${valueOne}`);
// }


//Odd:
//n % 2 ===1 => for positive odd
//n % 2 !== 0

// for (let a = 1; a <= 10; a++) {
//     if (a % 2 != 0) {
//         console.log(`The odd value is: ${a}`);
//     }
// }

// The odd value is: 1
// The odd value is: 3
// The odd value is: 5
// The odd value is: 7
// The odd value is: 9



//Even:
// for (let a = 1; a <= 10; a++) {
//     if (a % 2 == 0) {
//         console.log(`The Even value is: ${a}`);
//     }
// }

// The Even value is: 2
// The Even value is: 4
// The Even value is: 6
// The Even value is: 8
// The Even value is: 10



// 19_5 Problem solving with For Loop
//sum:

// let sum = 0;
// for (let a = 1; a <= 20; a++) {
//     sum = sum + a;
// }
// console.log(`The sum is : ${sum}`);

//The sum is : 210

//Decremental for loop:
// for(let a = 10; a >= 1; a-- ){
//     console.log(a);
// }

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1


//19_6 Different ways to use loop

//odd number:
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 1) {
//         console.log(i);

//     }
// }

//Divisible by 5 from 1 to 30
// for (let x = 1; x <= 30; x++) {
//     if (x % 5 == 0) {
//         console.log(x);
//     }
// }

// 5
// 10
// 15
// 20
// 25
// 30

//Divisible by 5 or 3 from 1 to 30
// for (let x = 1; x <= 30; x++) {
//     if (x % 3 === 0 || x % 5 === 0) {
//         console.log(x);
//     }
// }

// 3
// 5
// 6
// 9
// 10
// 12
// 15
// 18
// 20
// 21
// 24
// 25
// 27
// 30


//19_7 When to use a break and continue
//Break:
// for (let y = 0; y <= 20; y++) {
//     console.log(y);

//     if (y >= 5) {
//         break;
//     }
// }


//Continue:
// for(let i = 1; i <= 20; i++){
//     if(i % 2 ===1){
//         continue;
//     }
//     console.log(i);

// }

// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20


// 19_8 (optional) Introduction to Do While Loop


//while:
// let i = 0
// while (i < 5) {
//     console.log(i);
//     i++
// }


//do-while:

// let a = 0;
// do {
//     console.log(a);
//     a++
// }
// while (a < 5)

// 0
// 1
// 2
// 3
// 4

let b = 10;
do {
    console.log(b);
    b++
}
while (b < 5)

//Output:
// 10

//The block of code inside the loop is executed
// at least once, even if the condition is false from the start.

