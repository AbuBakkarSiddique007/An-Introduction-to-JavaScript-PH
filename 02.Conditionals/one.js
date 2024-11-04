//Repo link: https://github.com/ProgrammingHero1/js-conditionals.git
//task Link: https://github.com/ProgrammingHero1/JS-conditionals-tasks.git


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

const productPrice = 4000
if (productPrice >= 5000) {
    let discount = productPrice * 10 / 100
    let payAmount = productPrice - discount
    console.log(
        `WOW! You get 10% discount in the product which is : ${discount}.
    You payAmount is: ${payAmount}`);
}

else if (productPrice >= 4000) {
    let discount = productPrice * 5 / 100
    let payAmount = productPrice - discount
    console.log(
        `WOW! You get 5% discount in the product. which is : ${discount}
    You payAmount is: ${payAmount}`);
}

else {
    console.log("pay the full payment!");

}


//18_7 (optional) Nested if-else condition

const money = -10;
if (money > 300) {
    console.log('bro you are rich!!!');
}
else {
    if (money > 100) {
        console.log('tui gorib o na boro lok o na')
    }
    else {
        if (money > 0) {
            console.log('dosto kola kha.calcium bara')
        }
        else {
            console.log('tui amar bondhu na. ')
        }
    }
}

//18_8 (advanced )If-else shorthand Ternary Operator

/**
 * TERNARY --> three parts
 * 
 *   ?    :
 * 
 *  condition ? do something when true : do something when false
*/

const age = 112;

// normal if-else
// if(age >=18){
//     console.log('You can vote.')
// }
// else {
//     console.log('Ghumai thako')
// }


// simple ternary
age >= 18 ? console.log('Vote Dio') : console.log('Ghumai thako')

let price = 500;
const isLeader = false;

if (isLeader === true) {
    price = 0;
}
else {
    price = price + 100;
}
// console.log(price)

price = isLeader === true ? 0 : price + 100;



//semi-advanced ternary
if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 1000;
}



// price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 1000;

//or:
price = isLeader === true ?
    price > 1000 ?
        price / 2 : 0
    : price + 1000;



// 18_9(advanced) Logical Not Operator

// const isLeader = true;
// if(isLeader === true)
if (isLeader) {
    console.log('leader asche! chair charo');
}
else {
    console.log('vitore dukte dibi na');
}

const isPassed = true;
// if(isPassed === false)
if (!isPassed) {
    console.log('toke biya diya dimu');
}
else {
    console.log('tumi amader noyon er moni')
}





// !true        //return false
// !false       //return true
// !""          //return true
// !"cat"       //return false



//18_10 Homework and Making Decisions in your code
