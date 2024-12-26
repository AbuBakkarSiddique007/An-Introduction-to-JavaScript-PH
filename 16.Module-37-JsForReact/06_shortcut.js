//Truthy:   // 'almas', 5, true, {}, []

//Falsy: // '', 0, false, null, undefined

// check truthy
let myVar = 5;
// check any truthy 
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}


let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}

const money = 1000
let food

if (money > 800) {
    food = 'Biriyani'
}
else {
    food = 'Drink water'
}

// ternary 
let food1 = money > 800 ? 'Biriyani' : 'pani kha';
console.log(food1);


let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);


// number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr)

// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);


// 
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;