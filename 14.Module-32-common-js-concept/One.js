//Repo Link: https://github.com/ProgrammingHero1/common-js-concepts.git



// 32-1 Module Overview, Primitive and non-primitive data type
//Type:
// strongly typed Language
// int a = 5;
// string b = 'alim halim khalim';
// bool c = True;
// object student = { name: 'noya dhman', id: 55}
// int[] numbers = [12, 45, 78]
// string[] friends = ['abul', 'babul'];

// JavaScript is a dynamic typed Language

// primitive type
// const a = 5;
// const b = 'Samsu kopai na ekhon ar';
// const d = true;


// non-primitive
// const ages = [45, 65, 48];
// const student = {id: 23, class: 7};

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

// let x = 5;
// let y = x;
// console.log(x, y);
// y = 7;
// console.log(x, y);

// let p = {job: 'web developer'}
// let q = p;
// q.job = 'front end developer';
// console.log(p, q);



//32-2 Null Vs Undefined, different ways you will get undefined

/*
 8 ways to get Undefine
1. variable that is not initialized will give undefined
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined
*/

// let first ;

// function second(a, b){
//     const total = a + b;
// }

// const result = second();

// function third(a, b, c, d){
//     const total = a+b+c+d;
//     console.log(a, b, c, d);
// }

// third(2, 5);

// console.log(result);

// function noNegative(a, b){
//     if(a < 0 || b< 0){
//         return
//     }
//     return a + b;
// }

// const total = noNegative(2,-5);
// console.log(total);
// const fifth = {id: 2, name: 'ponchom', age: 40}
// console.log(fifth.age, fifth.salary);

// const sixth = [4, 89, 87, 56, 54];
// you should not do it. Instead use splice
// delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log(sixth);

// const eighth = undefined;

// const ninth = null;

// const data = {results: [], updated: null}

// console.log(typeof undefined);
// console.log(typeof null);



//32-3 Different Truthy and Falsy values in JavaScript
//true and false:
/*
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. {}
6. []


Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/
// let x = [5, 6];
// console.log(x);
// if(x){
//     console.log('value of x is truthy');
// }
// else{
//     console.log('value of x is falsy');
// }

// optional
// check falsy
// const y = null;
// if (!y){
//     console.log('value is falsy')
// }
// const z = {class: 9};
// // check true
// if(!!x){
//     console.log('value is truthy');
// }



//32-4 double equal (==) vs triple equal (===), implicit conversion


//triple:
// always use ===
// equal comparison doesnt work for non-primitive

// const first = [45, 54, 98];
// const second = [45, 54, 98];
// if(first === second){
//     console.log('values are equal')
// }
// else{
//     console.log('values are not equal');
// }

// type coercion
// type conversion
// type casting


//32-5 Block scope global scope simple understanding of Hoisting
//scope:

// function add(a, b){
//     const total = a+b;
//     if(b>5){
//         const sum = 25 + a +b;
//     }
//     else{
//         const sum = 5 + a + b;
//         var current = sum;
//     }
//     console.log(current);
//     return total;
// }
// console.log(a,b);
// console.log(total);
// add(5, 3);


//hoisting:
// print5();
// console.log(print10);
// print10();
// for(let i = 0; i< 5; i++){
//     // console.log(i);
// }
// // console.log('outside', i);

// function print5(){
//     console.log('inside print5', 5);
// }
// var print10 = function(){
//     console.log('inside print10', 10);
// }



//32-6 (advanced) Closure, encapsulation, private variable

//closer: explore more ***

// function kitchen(){
//     let roast = 0;
//     return function(){
//         roast++;
//         return roast;
//     }
// }

// const firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());


//32-7 (optional) Callback function and pass different functions

//callback:

// function greeting(greetingHandler, name){
//     greetingHandler(name);
// }
// const name = 'Halim mama';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
// function greetingHandler(name){
//     console.log('Good Morning', name);
// }

// function greetEvening(name){
//     console.log('Good Evening', name);
// }

// function greetNight(name){
//     console.log('Good Night', name);
// }

// greeting(greetingHandler, 'Tom Hanks');
// greeting(greetingHandler, 'Tom Brady');
// greeting(greetingHandler, 'Tom Cruise');
// greeting(greetEvening, 'Tom Solaiman');
// greeting(greetEvening, 'Tom Salman');
// greeting(greetNight, 'Rasel')


// function submitHandler(){
//     console.log('submit button clicked')
// }
// document.getElementById('btn-submit').addEventListener('click',submitHandler)




//32-8 (advanced) function arguments pass by reference pass by value

//arguments:

// function sum(a, b, c) {
// console.log(arguments);
// console.log(typeof arguments);  //object
// console.log(arguments[3]);  //34
//we can use loop (for of, not map , filter) in arguments
//remind it, its array like object, NOT array.
//So, we can not use array's operation like push()

// arguments.push(232) //Error

//     const args = [...arguments] //[ 1, 2, 3, 34, 4, 3 ]
//     console.log(args);



//     const result = a + b + c
//     return result
// }

// console.log(arguments);

// const total_1 = sum(1, 2, 3)
// console.log(total_1); //6

// const total_2 = sum(1, 2, 3, 34, 4, 3,) //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 34, '4': 4, '5': 3 } // array like object.
// console.log(total_2);   //6

// console.log(typeof sum);    //function
// console.log(sum.length);    //3



//pass by js:

let num1 = 10
let num2 = 20

function multiply(a, b) {

    a = 5
    const result = a + b

    console.log(a, b);  //5 20


    return result
}

const output = multiply(num1, num2)
console.log(output);    //30
console.log(output);   // 25 // a =5

console.log(num1);  //10


//Non-primitive: object and array are pass by reference
//Primitive: primitive types are pass by value.

//Non-Primitive:
// block scope e khono variable er value change korle oita outer-scope eo pawa jai(change hoye jai).
// but primitive type e change hoi nh.


//Explore more:
//pass by value
//pass by reference


//32-8_1 Pass by value and pass by reference visualization
//32-9 Error Debug and Money master diaster

