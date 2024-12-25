// Repo link: https://github.com/ProgrammingHero1/js-concepts-for-react.git


//Six Fundamentals you have to know for ReactJs

// 01. How to declare a variable using let and const
const name = 'AbuBakkarSiddique'

let season = 'rainy'
season = 'winter'


// 02. conditions

// 6 basic conditions: >,<, ===, !==, <=, >= 
// multiple conditions: &&, ||

if (name === 'abuBakkar' || season === 'rainy') {
    //do something
}
else if (name === 'AbuBakkar') {
    //do something
}

else {

}


// 03. array declare
// index, 
// length, push, 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
numbers[0] = 50



// 04. loop
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    console.log(num);

}


// 05. function 

function multiply(num1, num2) {
    const result = num1 * num 2
    return result
}

const output = multiply(10, 23)


// 06. Object
// 3 ways to access property by name 

const students = {
    name = 'Riki',
    age  = 24,
    friends =['a', 'b', 'c']

}

// direct by property
console.log(students.age);

// access via property name string 
console.log(students['age']);

// access via property name in a variable
const myVariable = 'age'
console.log(students[myVariable]);
