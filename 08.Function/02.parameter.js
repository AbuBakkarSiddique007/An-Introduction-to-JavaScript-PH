// function info(name, id) {
//     console.log(`Hello! This is ${name}, 
//                  Id is : ${id} `);
// }

// info("Abu Bakkar Siddique", "E201008")



// function square(value) {
//     console.log('The result is : ', value * value);

// }
// square(2)
//The result is :  4

// function square_Two(a) {
//     return a * a
// }

// let result = square_Two(4)
// console.log(result);    //16


// function sumAll(a, b, c) {

//     return a + b + c
// }

// let sum = sumAll(2, 2, 2)
// console.log(sum);   //6



//21-4 How Function works and argument vs parameters

// function doubleIt(a) {
//     let doubled = a * 2
//     console.log(a, doubled);

// }
// doubleIt(2)
// doubleIt(4)

// let mony = 12
// doubleIt(mony)


// function difference(value1, value2) {
//     diff = value1 - value2
//     console.log(value1, value2, "The Difference is : ", diff);

// }

// value1 = 20
// value2 = 10
// difference(value1, value2)

//20 10 The Difference is :  10


//21-5 Function return and set return value to a variable


//return

function add(a, b) {
    addition = a + b
    return addition
}

let theResult = add(5, 5)
console.log(theResult);


//21-6 Recap and conditional return of odd and even

// function doMath(num1, num2) {
//     const sum = num1 + num2;
//     const diff = num1 - num2;
//     const multiply = sum * diff;
//     const result = multiply / 2;
//     return result;
// }

// const result = doMath(10, 5);
// console.log(result);


//Conditional Return:

function isEven(number) {
    if (number % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(isEven(5));
console.log(isEven(120));

function isOdd(number) {
    if (number % 2 === 1) {
        return true
    }
    return false
}
console.log(isOdd(5));
console.log(isOdd(44));

