//Repo link: https://github.com/ProgrammingHero1/js-conditionals.git

//task Link: 


// 18_1 Compare variables and Comparison operator

/**
 * COMPARISON
 * 1. bigger: > 
 * 2. less: <
 * 3. equal: ==
 * 4. greater than or equal: >= 
 * 5. less than or equal: <=
 * 6. not equal: !=
 * 
 * -------------------
 * 7. and: &&
 * 8. or: ||
*/

// 18_2 Introduction to Conditionals

// console.log(5 > 10);    //false
// console.log(5 < 10);    //true
// console.log(5 == 10);   //false
// console.log(10 == 10);  //true
// console.log(15 >= 10);  //true
// console.log(5 >= 10);   //false
// console.log(5 <= 10);   //true
// console.log(10 <= 10);  //true
// console.log(100 <= 10); // false

// console.log(10 == 10);  //true
// console.log(10 == 10.1);//false


let value_1 = 100
let value_2 = 50

// console.log(value_1 > value_2);     //true
// console.log(value_1 < value_2);     //false


/**
 * == => just the value.
 * === => check the value also its data type.
 * 
*/

// console.log(100 == '100'); //true
// console.log(100 === '100');//false


// console.log(10 != '10')  //false
// console.log(10 !== '10') //true



// 18_3 If_else statement (visualization)
// 18_4 Conditional branching if Else Condition

//if else:

let a = 100
let b = 50

if (a > b) {
    console.log("The value of a is greater than  b");
}
else {
    console.log("The value of a is less than b");
}
//The value of a is greater than  b


// let c = 100
// let d = 200

// if (a <= b) {

// }


// 18_5 Multiple condition Logical Operators(&&, ||)


const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = false;
// height = 71;


// if(salary > 20000 && height > 66){
//     console.log('Su----patro');
// }
// else{
//     console.log('onno patro khuji')
// }

// if(salary > 25000 || height > 72){
//     console.log('eso baba kobul');
// }
// else {
//     console.log('vaag tui mokbul')
// }


// more and more condition
// if(salary > 25000 || height > 72 || isBCS == true){
//     console.log('eso baba kobul');
// }
// else {
//     console.log('vaag tui mokbul')
// }

// if(salary > 25000 && height > 72 && isBCS == true){
//     console.log('eso baba kobul');
// }
// else {
//     console.log('vaag tui mokbul')
// }

// -----------------COMPLEX CONDITION--------------------
// if((salary > 25000 && hasCar == true) || isBCS== true ){
//     console.log('tomar 14 gosti raji')
// }

// if((salary > 25000 || hasCar == true) && isBCS== true ){
//     console.log('tomar 14 gosti raji')
// }


//18_6 Multi level If-else if-else condition
