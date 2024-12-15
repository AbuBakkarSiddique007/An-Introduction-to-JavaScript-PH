//https://github.com/ProgrammingHero1/explore-more-es6.git
// Task: https://github.com/ProgrammingHero1/explore-more-es6/blob/main/practice.js

//31-0 Basic ES6 Concept
//31-1 Module Introduction and Basic ES6 Recap

//recap:



//31-2 Access Value, nested object, Optional chaining
//Chaining  :
//data access:

// const data = [{ id: 1, name: 'Riki Ahmed', address: 'CTG' }]
// console.log(data);
// console.log(data[0]);
// console.log(data[0].name);

// const products = {
//     count: 5000,
//     data: [
//         { id: 1, name: 'Dell', price: 50000 },
//         { id: 1, name: 'Lenovo', price: 40000 },
//     ]
// }

// console.log(products.data[1].name);     //Lenovo
// console.log(products.data[1].price);    //40000


// const user = {
//     id: 100,
//     name: 'Riki',
//     address: {
//         street: {
//             first: 'Satkhania',
//             second: 'kumira',
//             third: '2no gate'
//         },
//         city: 'Chittagong'
//     }
// }
// console.log(user);
// console.log(user.address.street.third);



//optional Chaining: ***
// const user_2 = {
//     id: 100,
//     name: 'Riki',
//     address: {
//         home: {
//             first: 'Satkhania',

//         },
//         city: 'Chittagong'
//     }
// }
// console.log(user.address.street?.third);    //2no gate
// console.log(user_2.address.street.third);   //error

//Optional Chaining:
// console.log(user_2.address.street?.third);     //undefined




//31-3 Array map to do one line loop magic
//map:

// const numbers = [1, 3, 4, 5, 6]

// const doubled = []
// for (let num of numbers) {
//     let double = num * 2
//     doubled.push(double)
// }
// console.log(doubled);
//[ 2, 6, 8, 10, 12 ]


//OR:
// const numbers_2 = [1, 3, 4, 5, 6]

// function doubleIt(num) {
//     return num * 2
// }

// const result = numbers_2.map(doubleIt)
// console.log(result);
//[ 2, 6, 8, 10, 12 ]


// const numbers_3 = [1, 3, 4, 5, 6]

// const doubleIt_4 = num => num * 2
// const double = numbers_3.map(doubleIt_4)
// console.log(double);
//[ 2, 6, 8, 10, 12 ]

//Map function:
// const numbers_5 = [1, 3, 4, 5, 6]
// let double = numbers_5.map(n => n * 2)
// console.log(double);
//[ 2, 6, 8, 10, 12 ]

// const fiveBonus = numbers_5.map(n => n + 5)
// console.log(fiveBonus);
//[ 6, 8, 9, 10, 11 ]

// const friend = ['abu', 'bakkar', 'siddique']
// const findLength = friend.map(l => l.length)
// console.log(findLength);
//[ 3, 6, 8 ]

// const firstLetter = friend.map(f => f[0])
// console.log(firstLetter);
//[ 'a', 'b', 's' ]

//map => khono ekta kaj kore then return kore dei.


//31-4 foreach, filter, find, and differences between them


// For Each:

//forEach => khono ekta kaj kore then khono kisu return kore nh

// const numbers = [1,2,3,4,5]

// const result = numbers.forEach(n => console.log(n))
///output:
// 1
// 2
// 3
// 4
// 5

// console.log(result);
//output: undefined
//cause it does not return anything.



//filter:
//used for filter out
//filer select element based on a condition and returns as an array with the element that fulfilled the condition.

// const numbers = [1, 2, 3, 4, 5]
// const players = [75, 72, 65, 55, 52] //Players height in Inch

// const selected = players.filter(p => p > 55)
// console.log(selected);
//[ 75, 72, 65 ]

// const selected_2 = players.filter(p => p > 70)
// console.log(selected_2);
//[ 75, 72 ]

// const selected_3 = players.filter(p => p > 80)
// console.log(selected_3);
//[]

// const selected_4 = players.filter(p => p % 2 === 1)
// console.log(selected_4);
//[ 75, 65, 55 ]


// const nameList = ['Riki', 'Ahmed', 'Rahim', 'Karim']
// const selectedName = nameList.filter(n => n.length > 4)
// console.log(selectedName);
//[ 'Ahmed', 'Rahim', 'Karim' ]

// const selectedName_2 = nameList.filter(n => n.length > 9)
// console.log(selectedName_2);
//[]


//find:
//find => only return the first element that fulfill the condition.

// const numbers_2 = [1, 2, 3, 4, 5]
// const selected_5 = numbers_2.find(n => n > 2)
// console.log(selected_5);
// //3

// const selected_6 = numbers_2.find(n => n > 6)
// console.log(selected_6);
//undefined


// const nameList_2 = ['Riki', 'Ahmed', 'Rahim', 'Karim']
// const selectedName_3 = nameList_2.find(n => n.length > 4)
// console.log(selectedName_3);
// //Ahmed

// const selectedName_4 = nameList_2.find(n => n.length > 9)
// console.log(selectedName_4);
// //undefined



//map vs forEach vs filter vs find:
//map => khono ekta kaj kore then return kore dei.
//forEach => khono ekta kaj kore then khono kisu return kore nh
//filter => select element based on a condition and returns as an array with the element that fulfilled the condition.
//find => only return the first element that fulfill the condition.


// 31-5 (Recap) Map, forEach, filter, find, reduce


//reduce:
//reduce => return a single value based on the array.

// const numbers_3 = [1, 2, 3, 4, 5]
// const sum = numbers_3.reduce((sum, n) => sum + n, 0)
// console.log(sum);
// //15

// Initial Value:   0
//sum, n) => sum + n
// The result is 0 + 1 = 1.
// The result is 1 + 2 = 3.
// The result is 3 + 3 = 6.
// The result is 6 + 4 = 10.
// The result is 10 + 5 = 15.


//array of object:

// const products = [
//     { id: 1, name: 'laptop', price: 50000 },
//     { id: 2, name: 'mobile', price: 15000 },
//     { id: 3, name: 'watch', price: 5000 },
//     { id: 4, name: 'tablet', price: 10000 },
// ]

// const total = products.map(products => products.name)
// console.log(total);
// [ 'laptop', 'mobile', 'watch', 'tablet' ]

// products.forEach(products => console.log(products.id))
// 1
// 2
// 3
// 4

// const expensive = products.filter(products => products.price > 10000)
// console.log(expensive);
// [ { id: 1, name: 'laptop', price: 50000 }, { id: 2, name: 'mobile', price: 15000 } ]

// const affordable = products.find(products => products.price < 10000)
// console.log(affordable);
// { id: 3, name: 'watch', price: 5000 }


// const total_2 = products.reduce((sum, products) => sum + products.price, 0)
// console.log(total_2);
// //85000



//31-6 (optional) Introduction to Class and objects

// const Product_1 = [
//     { id: 1, name: 'laptop', price: 50000 },
//     { id: 2, name: 'mobile', price: 15000 },
//     { id: 3, name: 'watch', price: 5000 },
//     { id: 4, name: 'tablet', price: 10000 },

// ]

//class: class is a blueprint for creating objects with pre-defined properties and methods.
//class is a template for creating objects.


// class Items {
//     country = 'Bangladesh'
//     constructor(name){
//         this.name = name;
//     }
//     speak(talk) {
//         console.log(`Taking about ${talk}`);
//     }
// }

// const item = new Items('abu bakkar')
// console.log(item);

// item.speak('Bangladesh')


// class Teacher{
//     constructor(name,subject){
//         this.name = name
//         this.subject = subject
//     }
//     lecture(){
//         console.log('Sir is Teaching Math!');

//     }
// }

// const rohim = new Teacher('Rohim', 'English')
// console.log(rohim);

// rohim.lecture()


// const sakib = new Teacher('Sakib', 'Mathematics')
// console.log(sakib);


//31-7 (optional) Inheritance prototypical inheritance

// class Vehical {
//     constructor(name, price) {
//         this.name = name
//         this.price = price

//     }
//     move() {
//         console.log('Gari chole ura dura!');
//     }
// }

// class Bus extends Vehical{
//     constructor(name, price, seat,ticketPrice){
//         super(name,price)
//         this.seat = seat
//         this.ticketPrice = ticketPrice
//     }
// }

// class Truck extends Vehical {
//     constructor(name, price, load){
//         super(name, price)
//         this.load
//     }
// }


//31-8 (advanced) this keyword, Dot notation vs bracket notation
//this:


// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     sleep(){
//         console.log(`Sleeping now ${this.name}`);
//     }

//     activity(){
//         this.sleep()

//     }
// }

// const  sakib = new Person('Sakib Khan', 45)
// console.log(sakib);

// const amir = new Person('Amir Khan', 50)
// amir.activity()


//DOT and Bracket notation:

// const person = {
//     name: 'Sakib Khan',
//     job: 'Actor',
//     3: 'Three',
//     'add-dress' : 'Kochu khet'
// }

// const nam = 'name'
// console.log(person.name);       //Sakib Khan
// console.log(person['name']);    //Sakib Khan
// console.log(person[nam]);       //Sakib Khan
// console.log(person['3']);       //Three
// console.log(person["add-dress"]);//Kochu khet


//31-9 Explore Chrome devtool Console tab features
//31-10 JavaScript Errors and practice tasks
//31-11 [optional and visualization] ES6 concept in a nutshell



//task: https://github.com/ProgrammingHero1/explore-more-es6/blob/main/practice.js


