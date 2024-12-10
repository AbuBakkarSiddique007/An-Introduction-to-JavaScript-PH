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

