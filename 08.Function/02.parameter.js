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

// function add(a, b) {
//     addition = a + b
//     return addition
// }

// let theResult = add(5, 5)
// console.log(theResult);


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

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(isEven(5));
// console.log(isEven(120));

// function isOdd(number) {
//     if (number % 2 === 1) {
//         return true
//     }
//     return false
// }
// console.log(isOdd(5));
// console.log(isOdd(44));



//21-7 Different types of parameters for a function

//various parameter:

//Q: For a given string tell me 
//whether it has even number of character or not.

// function evenSizedString(str) {

//     let size = str.length;
//     console.log(str, 'length:', size);

//     if (size % 2 === 0) {
//         console.log('Even Size String!');

//     }
//     else {
//         console.log('Odd Size String!');

//     }

// }

// evenSizedString('Hello World!')
// evenSizedString('Abu')



function isItEvenString(str) {

    let size = str.length;
    if (size % 2 === 0) {
        return true
    }
    else {
        return false
    }

}

// let result = isItEvenString('abu')
// console.log(result);


function doubleOrTriple(number, bol) {

    if (bol === true) {
        let result = number * 2
        return result
    }
    else {
        let result = number * 3
        return result
    }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));



// function numberOfElement(numbers) {
//     let len = numbers.length
//     return len
// }
// let arrSize = numberOfElement([1, 2, 3, 4, 5, 6])
// console.log(arrSize);


// function getAge(person) {
//     let age = person.age
//     return age
// }

// let person = {
//     age: 12,
//     name: 'abu'
// }

// let obj = getAge(person)
// console.log(obj);


//21-8 Sum of all numbers in an array using function

//  Objective: write a function to give me
// the sum of all numbers in an array


// function sumOfNumbers(num) {
//     let size = num.length
//     let sumValue = 0

//     for (let i = 0; i < size; i++) {
//         sumValue = sumValue + num[i]
//     }

//     return sumValue

// }

// let num = [1, 2, 3, 4, 5]
// let sum = sumOfNumbers(num)
// console.log("Sum of the numbers is ", sum);


//21-9 Return all the even numbers of an array

//create function that will return only
// the even numbers.

function evenNumbersOnly(number) {
    let newArray = []
    for (let num of number) {
        if (num % 2 === 0) {
            newArray.push(num)
        }
    }
    return newArray
}


let arr = [1, 2, 3, 4, 5]
console.log(evenNumbersOnly(arr));



function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers);

console.log('sum of the even numbers is', sum);

//21-10 Function Summary and Practice Tasks
