//30-1 ES6 Intro difference between var, Let and const
//var, let , constant:

// var => No reason to use var
// let => Allow it to reassign
// constant =>  Do not allow it to reassign


//const:
// const tk = 100;
// tk = 110;
// console.log(tk); //error


//let :
// let money = 10;
// money = 15
// console.log(money);

// let name = 'Abu Bakkar Siddique'

// let age = 24
// let isLoggedIn = true
// let city = 'Chittagong'

// console.log(name, age, isLoggedIn, city);
// console.log('------------------------------------');
// console.table([name, age, isLoggedIn, city])

//Array:
// const numbers = [1, 2, 3, 4, 5, 6]
// numbers = [10, 20, 30]  // error
// can not reassign new array.

//but we can reassign or change the array element
// numbers[0] = 100;
// numbers.push(200, 300, 400)

// console.log(numbers);


//Object :
// const student = {
//     name: 'Abu Bakkar Siddique',
//     class: 15
// }

// student.name = 'Siddique'

//Error:
// student = {
//     name: 'Riki Ahmed'
// }

// console.log(student);


//Loop :
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum = sum + i

//     // same:
//     // const num = i;
//     // sum = sum + num
// }

// console.log(sum);


//30-2 Function default parameter for not provided values
// default

//default => If value is not provided,
//take this as a default.


// function add(num1 = 1, num2 = 0) {
//     const result = num1 + num2
//     console.log(num1, num2, result);

//     return result

// }

// let sum = add(10, 15)
// // let sum = add(10)
// // let sum = add()
// // let sum = add(,6)

// console.log(sum);


// function fullName(first, last = '') {
//     let full = first + ' ' + last
//     return full
// }

// let full_Name_1 = fullName('Abu', 'Bakkar')
// let full_Name_2 = fullName('Abu')

// console.log(full_Name_1);
// console.log(full_Name_2);



// function friends(nums = []){

//     let friendName = nums
//     return friendName 
// }

// let myFriendsList = friends(['abu','bakkar','siddique'])
// console.log(myFriendsList);

// let myFriendsList = friends()
// console.log(myFriendsList);


// function objects(list = {}){
//     let obj = list
//     return obj
// }

// let li = objects()
// console.log(li);



//30-3 Template string, multiple line string, dynamic string

//Template:
// const first = 'Abu'
// const second = 'Bakkar'
// const name = first + ' ' + second

// console.log(name);


// const a = 10
// const b = 12
// const result = `The sum of ${a} and ${b} is equal to ${a + b}`


// const result = `The sum of ${a} and ${b} is 
// equal to ${a + b}`

// console.log(result);



//In object and array:
// const name_1 = {
//     name: 'Abu',
//     age: 24
// }
// const roll = [10, 12, 14]

// console.log(`The roll ${roll[0]}, His name is : ${name_1.name}`);



//30-4 Arrow function, multiple parameter, function body

//Arrow Function:


//Normal  Function / function declaration:
// function add(n1, n2) {
//     const result = n1 + n2
//     return result
// }


// function add(n1, n2) {

//     return n1 + n2
// }

// const addition = add(10, 15)
// console.log(addition);



//function expression / anonymous function:
// const add_2 = function (a, b) {
//     return a + b
// }
// console.log(add_2(10, 20));


//Arrow function:
// const add_3 = (a, b) => a + b

// const multiplication = (a, b, c, d) => a * b * c * d

// console.log(add_3(10, 20));
// console.log(multiplication(10, 2, 3, 5));



//30-5 More Arrow functions and big arrow function


// const difference = (a, b) => a - b
// const diff = difference(21, 20)
// console.log(diff);


// const multiply = (first, second, third) => first * second * third
// const multiplication = multiply(1, 2, 3)
// console.log(multiplication);

// console.table([diff, multiplication])


// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │ 0       │ 1      │
// │ 1       │ 6      │
// └─────────┴────────┘


//person => take a object input:
// const getAge = (person) => person.age
// const student = {
//     name: 'Abu Bakkar Siddique',
//     age: 24,
//     isLoggedIN: true
// }

// let age = getAge(student)
// console.log(age);


//numbers => take a array input:
// const getThird = numbers => numbers[2]

// const numArray = [1, 2, 34, 5, 23, 56]

// let third = getThird(numArray)
// console.log(third);

//No parameter:
// const getPI = () => Math.PI
// console.log(getPI());
// console.log(getPI().toFixed(2));


//Large arrow function:
// const doMath = (x, y, z) => {
//     const sum = x + y + z
//     const multiply = x * y * z
//     const result = sum + multiply

//     return result
// }

// let result = doMath(10, 20, 20)
// console.log(result);



//30-6 Spread operator, array max, copy arrays


//spread operator(...):
// const max = Math.max(21, 33, 24, 1, 2, 3, 4, 56, 6, 7, 76)

// console.log(max);   //76

// const array = [12, 33, 24, 4, 2, 1, 5, 64, 78]
// console.log(array); //full array ta ke return  korbe.
// [
//     12, 33, 24,  4, 2,
//      1,  5, 64, 78
//   ]

// console.log(...array);  // just array element  gula ke return  korbe.
//12 33 24 4 2 1 5 64 78

// console.log(Math.max(array));   //NaN
// console.log(Math.max(...array));    //78


//use spread operator to copy:

// const friend_1 = [1, 2, 3, 4, 5]

// const friend_2 = friend_1
// friend_2.push(6)
// console.log(friend_2);

// console.log(friend_1);

//friend_1, friend_2 2tar output oi same:
// [ 1, 2, 3, 4, 5, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]
//cause non-primitive data gula same reference dhore rake.

//To overcome from this:
// const friend_2 = [...friend_1]  //copying
// friend_2.push(10)

// console.log(friend_1);  //[ 1, 2, 3, 4, 5 ]
// console.log(friend_2);  //[ 1, 2, 3, 4, 5, 10 ]

// const friend_3 = [...friend_1, 30] //add Extra element while copying
// console.log(friend_3);  //[ 1, 2, 3, 4, 5, 30 ]

// let friend_5 = [1, 2, 3, 4, ...friend_3, 10, 20]
// console.log(friend_5);

// [
//     1,  2, 3, 4,  1,
//     2,  3, 4, 5, 30,
//    10, 20
//  ]



//30-7 (advanced) Object and Array Destructure

//Object Destructure:

// const actor = {
//     name: "Sakib Khan",
//     age: 40,
//     phone: '0183566542',
//     money: 2221212212
// }

// const phone = actor.phone
// const name = actor.name
// const age = actor.age

// console.log(phone);
// console.log(name);
// console.log(age);

// const { name } = actor
// const { age, phone: mobile } = actor

// console.log(name);
// console.log(age);
// // console.log(phone);

// console.log(mobile); //phone: mobile


//Array Destructuring:
// const numbers = [10, 20]

// const [first, second] = numbers
// console.log(first, second); //10 20


// const [x, y] = [40, 50]
// console.log(x, y);  //40 50


// function doubleIt(a, b) {
//     return [a * 2, b * 2]
// }

// const [prothom, ditiyo] = doubleIt(6, 9)
// console.log(prothom, ditiyo);   //12 18


//30-8 Keys, values, entries, delete, seal, freeze

//keys:
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

console.log(glass);
